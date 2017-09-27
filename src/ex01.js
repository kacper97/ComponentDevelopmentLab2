  import React from 'react';
  import ReactDOM from 'react-dom';
  import '../node_modules/bootstrap/dist/css/bootstrap.css';

  class Ex01 extends React.Component   {
    
    render() {
        return (
          <div>
          <h1> BSc XY modules table </h1>
            <table className="table table-bordered">
             <thead>
              <tr>
                <th>Name</th>
                <th>No lectures</th>
                <th>No practicls</th>
              </tr>
               </thead>
                <tbody >
                  <tr >
                    <td>Component Development</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr >
                  <td>Software Analysis and Design</td>
                  <td>3</td>
                  <td>2</td>
                  </tr>
                </tbody >
            </table>
            </div>
             );
      }
}

ReactDOM.render(
    <Ex01/>, document.getElementById('mount-point')
);