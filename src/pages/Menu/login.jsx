import React, { Component } from 'react'

class Login extends Component {
    render () {
        return (
            <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4">Login</h1>
              </div>
            </div>
      
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card ">
                  <div className="card-header">
                    
      
                    <div className="tab-content">
                      <div
                        id="credit-card"
                        className="tab-pane fade show active pt-3"
                      >
                        <form role="form">
                          <div className="form-group">
                            <label for="Email">
                              {" "}
                              <h6>Email</h6>{" "}
                            </label>
                            <input
                              type="text"
                              name="Email"
                              placeholder="Email"
                              required
                              className="form-control "
                            />
                          </div>
      
                          <div className="form-group">
                            {" "}
                            <label for="Password">
                              <h6>Password</h6>
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                name="Password"
                                placeholder="Password"
                                className="form-control "
                                required
                              />
                              
                            </div>
                          </div>
      
                          
      
                          <div className="card-footer">
                            <button
                              type="button"
                              className="subscribe btn btn-primary btn-block shadow-sm"
                            >
                              {" "}
                              Login{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
      
                    
      
                    
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          
        )
    }
}

export default Login