
const skills = [
    {skill: 'JavaScript', level: 5},
    {skill: 'HTML 5', level: 5},
    {skill: 'CSS3', level: 5},
    {skill: 'Express', level: 1},
    {skill: 'jQuery', level: 3},
];

function getAll() {
    return skills;
}

function getLevel(id) {
    return skills[id];
}

function create(Skill){
    skills.push(Skill);
}

function deleteOne(id){
    skills.splice(id, 1)
}

module.exports = {
    getAll,
    getLevel,
    create,
    deleteOne
};