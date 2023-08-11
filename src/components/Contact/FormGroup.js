import React , {useState , useEffect} from 'react';

const FormGroup = ({type , id , required , item , labelText , bootstrapStyle , rows , value , handleChange})=> {
    let formItem = required ? <input onChange={handleChange} value={value} type={type} className="form-control" id={id} required/> : <input onChange={handleChange} value={value} type={type} className="form-control" id={id} />
    if (item === 'textareaField') {
         formItem =  required ? <textarea onChange={handleChange} value={value} type={type} className={bootstrapStyle} id={id} rows={rows} required> </textarea> : <textarea onChange={handleChange} value={value} type={type} rows={rows} className={bootstrapStyle} id={id}> </textarea>
         
    } else if (item === "submitButton") {
         formItem = <button onChange={handleChange} value={value} type={type} className={bootstrapStyle} disabled = {required}>Submit</button>
    }
    
	return (
		<>
			<label className="form-label" htmlFor={id}>
				{labelText}
			</label>

            {formItem}
			
		</>
	);
}
export default FormGroup;
