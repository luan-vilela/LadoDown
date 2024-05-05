import { tableSchema } from '@nozbe/watermelondb';

export const  curvasCrescimentoSchema = tableSchema({
    name: 'curvas_crescimento',
    columns: [
        {
            name: 'curva',
            type: 'string',
        },
        {
            name: 'x',
            type: 'number',
        },
        {
            name: 'y',
            type: 'number',
        },
    ]
});