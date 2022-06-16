import './styles.css'
import React from 'react'

export default function BlogForm (props) {
  return (
    <form onSubmit={props.handleSubmit} className='blog-form'>
      <h2>{props.title}</h2>
      <div>
        <label>
          Title
        </label>
        <input
          name='title'
          type='text'
          placeholder='Title'
          value={props.formData.title}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label>
          Image URL
        </label>
        <input
          name='image'
          type='text'
          placeholder='Image URL'
          value={props.formData.image}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label>
          Description
        </label>
        <textarea
          name='description'
          type='text'
          placeholder='Description'
          value={props.formData.description}
          onChange={props.handleChange}
        />
      </div>
      <button
        type='submit'
        className='submit-button'
      >
        {props.buttonText}
      </button>
    </form>
  )
}
