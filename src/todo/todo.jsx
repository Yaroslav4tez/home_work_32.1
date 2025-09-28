import React, { useState, useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '@mui/material/Button';

import './todo.scss';


const Todo = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onFormSubmit = (values, { resetForm }) => {
    setTask((tasks) => [...tasks, values.task]);
    resetForm();
  };

  const onValidate = (formData) => {
    const errors = {};
    if (!formData.task.trim() || formData.task.trim().length < 5) {
      errors.task = "Too short ;(";
    }
    return errors;
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ task: "" }}
        onSubmit={onFormSubmit}
        validate={onValidate}
      >
        {() => (
          <Form className="form">
            
            <h1>Todo list</h1>
            <div className="form__input">
              <Field className="form__input_Field" type="text" name="task" />
              <ErrorMessage name="task" component="span" />
            
            <div className="form__btn_container">
              <Button className="form__btn" variant="contained" type="submit" >
                New Task
              </Button>
            </div>
            </div>
            <div className="todos_container">
              <ul>
                {tasks.map((t, i) => (
                  <li className="todo_item_description" key={i}>
                    <Checkbox />
                    {t}
                    <Button variant="outlined"
                      className="todo_item_delete"
                      type="button"
                      onClick={() =>
                        setTask(tasks.filter((_, index) => index !== i))
                      }
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Todo;