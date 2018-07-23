import React from 'react'

const jobForm = () => (
            <form className="need-validation" >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Front End Developer" required />
                    <div className="invalid-feedback">Please type a name</div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3" required></textarea>
                    <div className="invalid-feedback">Please type the description</div>
                </div>
                <div className="form-row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="habilities">Habilities and Skills</label>
                            <textarea className="form-control" id="habilities" rows="3" required></textarea>
                            <div className="invalid-feedback">Please type a skill</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="qualifications">Responsibilities and Qualification</label>
                            <textarea className="form-control" id="qualifications" rows="3" required></textarea>
                            <div className="invalid-feedback">Please type a qualification</div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" className="form-control" id="salary" placeholder="R$ 5000.00" required />
                            <div className="invalid-feedback">Please type the salary</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="area">Type</label>
                            <select id="area" className="form-control">
                                <option defaultValue>Developer</option>
                                <option>Tester</option>
                                <option>Designer</option>
                                <option>Trainee | Intern</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="impaired" />
                    <label className="form-check-label" htmlFor="impaired">Impaired</label>
                </div>
                <button type="submit" className="btn btn-success float-right">
                    Create Jobs
                    <i className="fas fa-check-circle"></i>
                </button>
            </form>       
);

export default jobForm;