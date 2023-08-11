import React , {useState , useRef} from 'react';
import FromGroup from './FormGroup'

function Form() {
	const [value , setValue] = useState({
		name : '',
		email : '',
		message : '',
	});
	const handleChange = (e)=> {
		setValue({...value , [e.target.id] : e.target.value}) ;
	}
	const [formItem , setFormItem] = useState([{
		id : "name" ,
		type : "text",
		required : true,
		item : "inputField",
		bootstrapStyle : "form-control" ,
		labelText : "Name",

	} , {
		id : "email" ,
		type : "email",
		required : true,
		item : "inputField",
		bootstrapStyle : 'form-control',
		labelText : "Email",

	} ,
	{
		id : "message" ,
		type : "textarea",
		required : false,
		item : "textareaField",
		bootstrapStyle : 'form-control',
		labelText : "Message",
		rows : 4,
	} , 
	{
		id : "submit" ,
		type : "submit",
		required : false,
		item : "submitButton",
		bootstrapStyle : 'btn btn-secondary',
	}

])

const handleSubmit = (e)=>{
	e.preventDefault();
	setValue({
		name : '',
		email : '',
		message : '',
	})
}
	return (
		<>
			<form onSubmit={handleSubmit}>
				{
					formItem.map(item => {
							return (
								<div key={item.id} className="form-group mt-3">
										<FromGroup {...item} value = {value[item.id]} handleChange = {handleChange}/>
								</div>
							)
					})
				}
			</form>
		</>
	);
}

export default Form;
