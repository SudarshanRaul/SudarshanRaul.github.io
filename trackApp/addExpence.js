class AddExpence extends React.Component{
    
    render() {
        const {expTrackStore} = this.props;
        return (
            <div className="add-expence">
                <form className="col-lg-4 col-md-6 col-sm-8 col-xs-12">
                    <h3>
                        Add Expence
                    </h3>
                    <div className="form-group">
                        <input type="text" className="form-control" id="particular" placeholder="particular" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="cost" step="0.01" placeholder="cost" />
                    </div>
                    <div className="form-group">
                        <select>
                            {expTrackStore.getData('categoriese').map((majorCat) => {
                                return majorCat.subTypes.map((category) => {
                                    return (
                                        <option key={category.code} value={category.code}> {category.type} </option>
                                    );
                                })
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" id="date" placeholder="date" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                    <button className="btn btn-danger">Clear</button>
                </form>
            </div>
        );
    }
};