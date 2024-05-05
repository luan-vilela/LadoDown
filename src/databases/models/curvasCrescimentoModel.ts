import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators'

export class curvasCrescimentoModel extends Model {
    static table = 'curvas_crescimento';

    @field('curva')
    curva!: string;
    @field('x') 
    x!: number;
    @field('y') 
    y!: number;

}
