import { Injectable } from '@nestjs/common';
import { CreateBatimentDto } from './dto/create-batiment.dto';
import { UpdateBatimentDto } from './dto/update-batiment.dto';
import { DataSource, Repository } from 'typeorm';
import { Batiment } from './entities/batiment.entity';

@Injectable()
export class BatimentService {
  constructor( private dataSource: DataSource){

  }

  async getGeoJson(): Promise<any>{
    const rows = await this.dataSource.query(`
      SELECT
        gid,
        osm_id,
        ST_AsGeoJSON(geom) AS geom
      FROM donne_batiment  
    `)

    const features = rows.map(row =>({
      type: 'Feature', 
      geometry: JSON.parse(row.geom),
      proprieties:{
        id: row.gid,
        /*nom: row.prop,
        lot: row.lot_bat,
        impot: row.impot,
        type: row.type,
        etat: row.etat,
        nom_com: row.nm,*/
        osm_id: row.osm_id,
      },
    }))

    return {
      type: 'FeatureCollection',
      features: features,
    }
  }

  /*create(createBatimentDto: CreateBatimentDto) {
    return 'This action adds a new batiment';
  }

  findAll() {
    return `This action returns all batiment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} batiment`;
  }

  update(id: number, updateBatimentDto: UpdateBatimentDto) {
    return `This action updates a #${id} batiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} batiment`;
  }*/

/*  async genererLotsAutomatiquement() {
    const batiments = await this.dataSource.query(`
      SELECT gid, name_4, adm3_en, adm4_en
      FROM donne_batiment
      WHERE lot IS NULL
      ORDER BY name_4, gid
    `);

    const lots: { gid: number; lot: string }[] = [];
    const compteurs: Record<string, number> = {};

    for (const batiment of batiments) {
      const arrondissement = batiment.name_4 || 'INCONNU';
      const fokontany = this.titreCase(batiment.adm4_en || 'Fokontany');

      // Init compteur par arrondissement
      if (!compteurs[arrondissement]) {
        compteurs[arrondissement] = 1;
      }

      const numero = compteurs[arrondissement]++;
      const codeArr = this.codeArrondissement(arrondissement);
      const secteur = this.codeSecteur(numero);
      const lettre = this.lettreAleatoire();
      const suffixe = this.suffixeOptionnel();

      const lot = `Lot ${codeArr} ${secteur} ${lettre}${suffixe} ${fokontany}`;

      lots.push({ gid: batiment.gid, lot });
    }

    for (const l of lots) {
      await this.dataSource.query(
        `UPDATE donne_batiment SET lot = $1 WHERE gid = $2`,
        [l.lot, l.gid]
      );
    }

    return { message: 'Lots générés avec arrondissement et fokontany', total: lots.length };
  }

  private codeArrondissement(name: string): string {
    const map = {
      '1er Arrondissement': 'I',
      '2e Arrondissement': 'II',
      '3e Arrondissement': 'III',
      '4e Arrondissement': 'IV',
      '5e Arrondissement': 'V',
      '6e Arrondissement': 'VI',
      '7e Arrondissement': 'VII',
    };
    return map[name.trim()] || 'X';
  }

  private codeSecteur(numero: number): string {
    return (60 + (numero % 40)).toString().padStart(2, '0');
  }

  private lettreAleatoire(): string {
    const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return lettres[Math.floor(Math.random() * lettres.length)];
  }

  private suffixeOptionnel(): string {
    const suffixes = ['', '', ' BIS', ' TER']; // BIS ou TER avec moins de chance
    return suffixes[Math.floor(Math.random() * suffixes.length)];
  }

  private titreCase(str: string): string {
    return str
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }*/

  async genererLot(): Promise<any> {
    const rows = await this.dataSource.query(`
      SELECT
        gid,
        osm_id,
        name_4,
        name_3,
        adm4_en,
        ST_AsGeoJSON(geom) AS geom
      FROM donne_batiment
    `);

    const features = rows.map((row: any) => ({
      type: 'Feature',
      geometry: JSON.parse(row.geom),
      properties: {
        id: row.gid,
        osm_id: row.osm_id,
        lot: this.buildLot(row.name_4, row.name_3),
      },
    }));

    return {
      type: 'FeatureCollection',
      features,
    };
  }

  private buildLot(name_4: string, name_3: string): string {
    // Extraire le numéro d’arrondissement du début de name_4
    const match = name_4?.match(/^(\d+)[a-z]*\s/i);
    const arrondissement = match ? match[1].padStart(2, '0') : '00';

    // Nettoyer le nom du fokontany
    const fokontany = name_3?.trim().replace(/\s+/g, '_') || 'Inconnu';

    // Générer le lot au format: Lot-ArrXX/fokontany
    return `Lot-Arr${arrondissement}/${fokontany}`;
  }

}

