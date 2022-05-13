import React from "react";
import { Link, withRouter } from "react-router-dom";

const Progress = ({ location: { pathname } }) =>{
    const isFirstStep = pathname === "/"
    const isSecontdStep = pathname === "/second"
    const isThirdStep = pathname === "/third"
    const isLoginPage = pathname === "/login"

    return(
        <React.Fragment>
            {!isLoginPage ? (
                <div className="steps">
                    <div className={`${isFirstStep ? 'step active' : 'step'}`}>
                        <div>1</div>
                        <div>
                            {isSecontdStep || isThirdStep ? (
                                <Link to="/">Passo 1</Link>
                            ) : ( "Passo 1" )}
                        </div>
                    </div>
                    <div className={`${isSecontdStep ? 'step active' : 'step'}`}>
                        <div>2</div>
                        <div>
                            {isThirdStep ? 
                                <Link to="/second">Passo 2</Link> : "Passo 2"
                            }
                        </div>
                    </div>
                    <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
                        <div>3</div>
                        <div>Passo 3</div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            
        </React.Fragment>
    )
}

export default withRouter(Progress)