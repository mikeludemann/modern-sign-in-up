import React from 'react';
import '../App.css';

const SignUp = () => {

	return (
		<div className="form-comp cfb">
			<h2>Create an Account!</h2>
			<form className="sign-up-form cfb">
				<label>
					Name:
					<br/>
					<input />
				</label>
				<label>
					Email:
					<br/>
					<input />
				</label>
				<label>
					Password:
					<br/>
					<input />
				</label>
				<br/>
				<button>
					Sign Up!
				</button>
			</form>
		</div>
	);
}

export default SignUp;
