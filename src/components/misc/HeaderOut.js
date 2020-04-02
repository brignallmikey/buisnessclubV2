import React from "react";


function HeaderOut() {
  return (
     <div className="form--login-logout">
			<form className="form-inline">
				<div className="form-group">
					<input className="form-control form-control-sm" type="text" placeholder="Username" value="" required/>
				</div>
				<div className="form-group">
					<input className="form-control form-control-sm" type="password" placeholder="Password" value="" required/>
				</div>
				<button className="btn btn-primary btn-md-2">Login</button>
			</form>
			<a href="#" className="btn btn-primary btn-md-2 login-btn-responsive" data-toggle="modal" data-target="#registration-login-form-popup">Login</a>
  </div>
  

    
  );
}

export default HeaderOut;
