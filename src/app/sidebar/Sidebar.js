import React from 'react';

/**
 * @requires styles 
 */
import './styles';

/**
 * @requires routes  
 */
import {
    getNestedRoutes, 
} from '../routes';

/**
 * 
 * @param {React.Element} children 
 * @param {string} title - top nav title  
 */
export function ExampleSidebar({ children, title }) {
    return (
        <aside className="course-menu header">
            <header>
                <i className="fa fa-chevron-left"></i>
                <span>{title || 'GBST React Architecture'}</span>
            </header>
            <section className="course-menu-categories">
                {children}

                <section className="course-menu-category">
                    <div className="header">
                        <div className="status">
                            <p className="number">1</p>
                        </div>
                        <div className="label">
                            UIKit
                            <span className="time">1 mins. 10 secs</span>
                            <span
                                className="project-icon "
                                style={{
                                    backgroundImage:
                                        'url("/assets/imgs/icons/basecamp.png")'
                                }}
                            ></span>
                        </div>
                    </div>
                    <section className="course-menu-scenes">
                        <section className="course-menu-scene">
                            <div className="header">
                                <div className="status">
                                    <p className="number">1.1</p>
                                </div>
                                <div className="label">Overview</div>
                                <div className="time">20s</div>
                            </div>
                            <section className="course-menu-steps">
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Overview</div>
                                        <div className="time">20s</div>
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section className="course-menu-scene">
                            <div className="header">
                                <div className="status">
                                    <p className="number">1.2</p>
                                </div>
                                <div className="label">Add Layout</div>
                                <div className="time">10s</div>
                            </div>
                            <section className="course-menu-steps">
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Add journey</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">
                                            Add journey steps
                                        </div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section className="course-menu-scene">
                            <div className="header">
                                <div className="status">
                                    <p className="number">1.3</p>
                                </div>
                                <div className="label">Add Compounds</div>
                                <div className="time">10s</div>
                            </div>
                            <section className="course-menu-steps">
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Add well</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">
                                            Refactor well
                                        </div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section className="course-menu-scene">
                            <div className="header">
                                <div className="status">
                                    <p className="number">1.4</p>
                                </div>
                                <div className="label">Add Elements</div>
                                <div className="time">30s</div>
                            </div>
                            <section className="course-menu-steps">
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Overview</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">
                                            Product details
                                        </div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Advisor</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">
                                            Personal details
                                        </div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Table</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Summary</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="course-menu-category isSelected">
                    <div className="header rgba(242, 147, 29, 0.45)">
                        <div className="status">
                            <p className="number">2</p>
                        </div>
                        <div className="label">
                            LogicKit<span className="time">19.5 secs</span>
                            <span
                                className="project-icon "
                                style='background-image: url("/assets/imgs/icons/sketch.png");'
                            ></span>
                        </div>
                    </div>
                    <section className="course-menu-scenes">
                        <section className="course-menu-scene isSelected">
                            <div className="header">
                                <div className="status">
                                    <p className="number">2.1</p>
                                </div>
                                <div className="label">Overview</div>
                                <div className="time">5s</div>
                            </div>
                            <section className="course-menu-steps">
                                <section className="course-menu-step isSelected">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Overview</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section className="course-menu-scene">
                            <div className="header">
                                <div className="status">
                                    <p className="number">2.2</p>
                                </div>
                                <div className="label">JourneyProvider</div>
                                <div className="time">14.5s</div>
                            </div>
                            <section className="course-menu-steps">
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">Overview</div>
                                        <div className="time">5s</div>
                                    </div>
                                </section>
                                <section className="course-menu-step">
                                    <div className="header">
                                        <div className="status">
                                            <span
                                                className="icon"
                                                data-icon="folder"
                                            ></span>
                                        </div>
                                        <div className="label">
                                            Journey Provider
                                        </div>
                                        <div className="time">9.5s</div>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </aside>
    );
}


/**
 * 
 * @param {React.ReactElement} children 
 * @param {string} title 
 */
export function Sidebar({ children, title, activeCatId, activeSceneId, activeStepId }) {
    const cats = getNestedRoutes();
    console.log(cats); 
    return (
        <aside className="course-menu header">
            <header>
                <i className="fa fa-chevron-left"></i>
                <span>
                    {title || 'GBST React Architecture'}
                </span>
            </header>
            <section className="course-menu-categories">

                {
                    cats.map((cat, catIndex) => {
                        return <Category
                            key={`cat${catIndex}`}
                            id={catIndex+1}
                            imgUrl={''} 
                            title={cat.title} 
                            time={{
                                mins: 1, 
                                secs: 10
                            }}
                            isSelected={activeCatId === cat.catId}
                        >
                            {
                                cat.scenes.map((scene, sceneIndex)=>{
                                    return <Scene 
                                        key={`scene${sceneIndex}`}
                                        id={`${catIndex+1}.${sceneIndex+1}`}
                                        title={scene.title} 
                                        time={{
                                            secs: 0
                                        }}
                                        isSelected={activeSceneId === scene.sceneId}
                                    >
                                        {
                                            scene.steps.map((step, stepIndex)=>{
                                                return <Step 
                                                    key={`step${stepIndex}`}
                                                    catId={step.catId}
                                                    sceneId={step.sceneId}
                                                    stepId={step.stepId}
                                                    id={`${catIndex+1}.${sceneIndex+1}.${stepIndex+1}`}
                                                    icon={step.icon || 'folder'} 
                                                    title={step.title || step.stepId} 
                                                    time={{
                                                        secs: 0
                                                    }}
                                                    isSelected={activeSceneId === step.sceneId && activeStepId === step.stepId}
                                                >
                                                </Step>
                                            })
                                        }
                                    </Scene>
                                })
                            }
                        </Category>
                    })
                }

                {/*
                <Category
                    key={'cat1'}
                    id={'1'}
                    imgUrl={''} 
                    title={'Cat '} 
                    time={{
                        mins: 1, 
                        secs: 10
                    }}
                    isSelected={true}
                >
                    <Scene 
                        id={'1'}
                        title={'scene'} 
                        time={{
                            secs: 0
                        }}
                        isSelected={true}
                    >
                        <Step 
                            id={'1.1'}
                            icon={'folder'} 
                            title={'step'} 
                            time={{
                                secs: 0
                            }}
                            isSelected={false}
                        >
                        </Step>
                    </Scene>
                </Category>
                */}
        </section>
    </aside>);
}

function Category({ children, id, title, time, imgUrl, isSelected }) {

    const [isActive, setIsActive] = React.useState(isSelected);

    return (
        <section
            className={`course-menu-category ${isActive ? 'isSelected' : ''}`}
        >
            <div 
                className="header"
                onClick={e=>setIsActive(!isActive)}
            >
                <div className="status">
                    <p className="number">{id}</p>
                </div>
                <div className="label">
                    {title}
                    <span className="time">
                        {time.mins ? time.mins + 'mins' : ''}.{time.secs} secs
                    </span>
                    <span
                        className="project-icon "
                        style={{
                            backgroundImage:
                                imgUrl ||
                                'url("/assets/imgs/icons/basecamp.png")'
                        }}
                    ></span>
                </div>
            </div>
            <section className="course-menu-scenes">{children}</section>
        </section>
    );
}

/**
 * @component Scene
 * @param {React.ReactChildren} children
 */
function Scene({ children, id, title, time, isSelected }) {

    const [isActive, setIsActive] = React.useState(isSelected);

    return (
        <section 
            className={`course-menu-scene ${isActive ? 'isSelected' : ''}`}
        >
            <div 
                className="header"
                onClick={e=>setIsActive(!isActive)}
            >
                <div className="status">
                    <p className="number">
                        {id}
                    </p>
                </div>
                <div className="label">
                    {title}
                </div>
                <div className="time">
                    {time.mins ? time.mins + 'm' : ''}
                    {time.secs}s
                </div>
            </div>
            <section className="course-menu-steps">
                {children}
            </section>
        </section>
    );
}

/**
 * @component Step
 * @param {React.ReactChildren} children
 */
function Step({ children, id, icon, title, time, isSelected, catId, sceneId, stepId }) {
    return (
        <section
            className={`course-menu-step ${isSelected ? 'isSelected' : ''}`}
        >
            <a className="header" href={`/#/${catId}/${sceneId}/${stepId}`}>
                <div className="status">
                    <span className="icon" data-icon={icon || 'folder'}></span>
                </div>
                <div className="label">{title}</div>
                <div className="time">
                    {time.mins ? time.mins + 'm' : ''}
                    {time.secs}s
                </div>
            </a>
        </section>
    );
}

Sidebar.Category = Category;
Sidebar.Scene = Scene;
Sidebar.Step = Step;
export default Sidebar;
