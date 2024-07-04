const Student = require('../models/student');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const student = await newStudent.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.findByIdAndDelete(id);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
