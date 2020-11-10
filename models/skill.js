module.exports = {
    getAll

};

const skills = [
    {skill: 'JavaScript', level: 5},
    {skill: 'HTML 5', level: 5},
    {skill: 'CSS3', level: 5},
];

function getAll() {
    return skills;
}