function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Leody', 'Admin');
usuarios.set('Stephany', 'Usuer');
usuarios.set('Cida', 'Admin');

console.log(getAdmins(usuarios));