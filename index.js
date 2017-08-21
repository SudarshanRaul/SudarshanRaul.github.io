let masterData = localStorage.getItem("expTracker") ? JSON.parse(localStorage.getItem("expTracker")) : {};
masterData.categoriese = [{
            type: "Regular Expence",
            code: "REGEX",
            subTypes: [{
                type: "Food",
                code: "FOOD"
            },{
                type: "House Rent/Accomadation",
                code: "HOUSE"
            },{
                type: "Local Travels",
                code: "LTRAV"
            },{
                type: "Grocery",
                code: "GROC"
            }]
        },{
            type: "Irregular Expence",
            code: "IREXP",
            subTypes: [{
                type: "Outstation Travels",
                code: "OTRAV"
            },{
                type: "Loan Given",
                code: "LONG"
            }]
        }];

const expTrackerData = {
    setData: (prop, value) => {
        masterData[prop] = value;
        localStorage.setItem("expTracker", JSON.stringify(masterData));
        return this.getData(prop);
    },
    getData: (prop) => {
        masterData = localStorage.getItem("expTracker") ? 
            Object.assign(masterData, JSON.parse(localStorage.getItem("expTracker"))) :
            masterData;
        if(masterData.hasOwnProperty(prop)) {
            return masterData[prop];
        }
        return false;
    },
    clearAll: () => {
        masterData = {};
        localStorage.removeItem("expTracker");
        return true;
    }
};

const TrackerApp = (
    <TrackApp expTrackStore = {expTrackerData} />
);

ReactDOM.render(
  TrackerApp,
  document.getElementById('app')
);