import { Point } from "geojson";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class DataPoint {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Lat:String;

    @Column()
    Long:String;

    // @Column()
    // Name:String;

    @Column()
    City_Name:String;

    @Index({ spatial: true })
    @Column({
      type: 'geography',
      spatialFeatureType: 'Point',
      srid: 4326,
      nullable: true,
    })
    location: Point;

    
}



