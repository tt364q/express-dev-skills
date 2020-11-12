// const skill = require('../models/skill');
const Skill = require('../models/skill');


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()    
    });
}
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getLevel(req.params.id),
        
        // Level: req.params.id
        
    })
}

function newSkill(req, res){
    res.render('skills/new')
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}



function create(req, res){
    // console.log(req.body)
    req.body.done = false
    Skill.create(req.body)
    res.redirect('/skills');

}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}