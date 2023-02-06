import React from 'react';
import './App.css';

export const ConfessionForm = () => {
    return (
        <>
        <div className="row" id="confession-form-row">
          <form id="confession-form" method="post" action="/">
            <span className="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="uniRadios" id="uomRadio" value="UoM"/>
                    <label className="form-check-label" htmlFor="uomRadio">
                    UoM
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="uniRadios" id="mmuRadio" value="MMU"/>
                    <label className="form-check-label" htmlFor="mmuRadio">
                    MMU
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="uniRadios" id="uosRadio" value="UoS"/>
                    <label className="form-check-label" htmlFor="uosRadio">
                    UoS
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="uniRadios" id="otherRadio" value="Other"/>
                    <label className="form-check-label" htmlFor="otherRadio">
                    Other
                    </label>
                </div>
            </span>
            <div className="form-group">
                <label htmlFor="confessionTextArea">Confession</label>
                <textarea className="form-control" id="confessionTextArea" rows="5" maxLength="1024" name="content"></textarea>
                <small id="confessionAnonymous" className="form-text text-muted">All confessions are completely anonymous</small>
            </div>
            <button type="submit" className="btn btn-danger">Confess</button>
          </form>
        </div>
        </>
      )
}