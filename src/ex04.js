 class Subjects extends React.Component {

        render() {
            let list = this.props.modules.map((module, index) => { 
                return (
                    <tr >
                       ..... TODO .....
                );
            });       
            return (
                <div>
                    <h1>{`${this.props.course} modules table`} </h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>No lectures</th>
                                <th>No practicls</th>
                            </tr>
                        </thead>
                        ....... TODO .....
                    </table>
                </div> 
            );
        }
    }

    let mods = [
        {
            name: 'Component Development',
            noLectures: 2,
            noPracticals: 2  
        },
        {
            name: 'Systems Analysis and Design',
            noLectures: 2,
            noPracticals: 1  
        },
        {
            name: 'IT Architecture',
            noLectures: 2,
            noPracticals: 1  
        }
    ] ;
    let name = 'BSc XY 3' ;

    ReactDOM.render(
        <Subjects course={name}  modules={mods}  />, document.getElementById('mount-point')
    );w