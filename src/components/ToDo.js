import React from 'react';

//component function
function ToDo ()
{

    //We use "return" for our render, in a component.
    return (
        <>
            <form>
                <label htmlFor="task">New Task:</label>
                <input type="text" id="task" />
                <input type="submit" value="Add To-Do" />
            </form>
            <ul></ul>
        </>
    );

}

export default ToDo;