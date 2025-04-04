const Skill = require('../models/Skill');

// GET all skills
const getSkills = async (req, res) => {
  const skills = await Skill.find({ createdBy: req.user.id });
  res.json(skills);
};

// CREATE a skill
const createSkill = async (req, res) => {
  const { title, description } = req.body;
  
  const skill = new Skill({
    title,
    description,
    createdBy: req.user.id,
  });

  const createdSkill = await skill.save();
  res.status(201).json(createdSkill);
};

// UPDATE a skill
const updateSkill = async (req, res) => {
  const { title, description } = req.body;
  
  const skill = await Skill.findById(req.params.id);
  if (!skill) return res.status(404).json({ message: 'Skill not found' });

  skill.title = title || skill.title;
  skill.description = description || skill.description;

  const updatedSkill = await skill.save();
  res.json(updatedSkill);
};

// DELETE a skill
const deleteSkill = async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) return res.status(404).json({ message: 'Skill not found' });

  await skill.remove();
  res.json({ message: 'Skill removed' });
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
