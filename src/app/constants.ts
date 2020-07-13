export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const STATIC_NOTES = [
    {
        id: 1,
        title: 'Example post five',
        date: '2020-07-15T16:30:08.681Z',
        description: 'No additional text - expample body text',
        selected: false,
    },
    {
        id: 2,
        title: 'Example post four',
        date: '2020-07-15T15:21:08.681Z',
        description: 'No additional text - expample body text',
        selected: false
    },
    {
        id: 3,
        title: 'Example post three',
        date: '2020-07-15T14:11:08.681Z',
        description: 'No additional text - expample body text',
        selected: false
    },
    {
        id: 4,
        title: 'Example post two',
        date: '2020-07-15T13:40:08.681Z',
        description: 'No additional text - expample body text',
        selected: false
    },
    {
        id: 5,
        title: 'Example post one',
        date: '2020-07-15T12:51:08.681Z',
        description: 'No additional texte - expample body text',
        selected: false
    }
];

export const NEW_NOTE = {
    id: 0,
    title: 'New Note',
    description: 'example body text',
    date: new Date(),
    selected: true
};
