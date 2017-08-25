class AddExpence extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categorySelected: {}
        };
    }
    
    updateState(stateProp, value) {
        this.setState({[stateProp]: value});
    }
    
    updateCategory(value) {
        let allCategoriese = [];
        this.props.expTrackStore.getData('categoriese').map(majorCat => {
           majorCat.subTypes.map(category => {
               allCategoriese.push(category);
           });
        });
        const categorySelected = allCategoriese.filter(category => category.code === value)[0];
        this.updateState('categorySelected', categorySelected);
    }
    
    updateOtherCategory(value) {
        let categorySelected = this.state.categorySelected;
        categorySelected.type = value;
        this.updateState({'categorySelected': categorySelected});
    }
    
    addExpence() {
        console.log(this);
        const {particular, cost, categorySelected, date} = this.state;
        if(particular === "" || cost === "" || date === "") {
            //validation error
            return;
        }
        this.props.expTrackStore.setData("storedExpData", {
            particular: particular,
            cost: cost,
            category: categorySelected,
            date: date
        });
    }
    
    render() {
        const {expTrackStore} = this.props;
        const {particular, cost, categorySelected, date} = this.state;
        return (
            <div className="add-expence">
                <div className="col-lg-4 col-md-6 col-sm-8 col-xs-12">
                    <h3>
                        Add Expence
                    </h3>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id="particular"
                            placeholder="particular"
                            value={particular}
                            onChange={(event) => this.updateState('particular', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"
                            id="cost"
                            step="0.01"
                            placeholder="cost"
                            value={cost}
                            onChange={(event) => this.updateState('cost', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <select value={categorySelected.code} onChange={(event) => this.updateCategory(event.target.value)}>
                            {expTrackStore.getData('categoriese').map((majorCat) => {
                                return majorCat.subTypes.map((category) => {
                                    return (
                                        <option key={category.code} value={category.code}> {category.type} </option>
                                    );
                                })
                            })}
                        </select>
                        {categorySelected.code === "OTH" && <input type="text"
                            className="form-control"
                            id="otherCategory"
                            placeholder="category"
                            value={categorySelected.type}
                            onChange={(event) => this.updateOtherCategory(event.target.value)}
                        />}
                    </div>
                    <div className="form-group">
                        <input type="date"
                            className="form-control"
                            id="date"
                            placeholder="date"
                            value={date}
                            onChange={(event) => this.updateState('date', event.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary"
                         onClick={(event) => this.addExpence()}>Add</button>
                    <button className="btn btn-danger">Clear</button>
                </div>
            </div>
        );
    }
};