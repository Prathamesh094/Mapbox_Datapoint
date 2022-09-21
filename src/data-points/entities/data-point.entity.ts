import { Point } from "geojson";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class DataPoint {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lat:String;

    @Column()
    long:String;

    // @Column()
    // Name:String;

    @Column()
    city_name:String;

    @Index({ spatial: true })
    @Column({
      type: 'geography',
      spatialFeatureType: 'Point',
      srid: 4326,
      nullable: true,
    })
    location: Point;

    
}



