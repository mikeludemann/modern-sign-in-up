import React from 'react';
import '../App.css';

const SignIn = () => {
	return (
		<div className="form-comp cfb">
			<h2>Sign In!</h2>
			<form className="sign-up-form cfb">
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
					Sign In!
				</button>
			</form>
		</div>
	);
}

export default SignIn;
