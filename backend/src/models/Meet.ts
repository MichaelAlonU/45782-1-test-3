import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Team from "./Team";

@Table({
    underscored: true,
    tableName: `meetings`
})
export default class Meet extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Team)
    @AllowNull(false)
    @Column(DataType.UUID)
    teamId: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startTime: Date;

    @AllowNull(false)
    @Column(DataType.DATE)
    endTime: Date;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(false)
    @Column(DataType.STRING)
    meetRoom: string

    @BelongsTo(() => Team)
    team: Team

}