/**
 * @class SegmentData
 * @description the class of TimeLine Data - Segment.
 */
class SegmentData {

    static TaskTypes = {
        addLib: "Prepare Library",
        uatRelease:  "UAT Release",
        prodRelease:  "Prod Release",
        test:  "Test",
        monitor:  "Monitor",
        rest:  "Break"
    }

    /**
     * 
     * @param {Date} startDate start date of timeRange
     * @param {Date} endDate end date of timeRange
     * @param {*} value value for property-val, could be integer or string or object
     */
    constructor(startDate, endDate, value) {
        this.start = startDate;
        this.end = endDate;
        this.timeRange = [this.start, this.end]
        this.val = value;
    }
}

/**
 * @class GroupData
 * @description the class of TimeLine Data - GroupData, contains an array of SegmentData.
 */
class GroupData {
    label = "";
    data = [];

    /**
     * 
     * @param {String} label Label of GroupData
     */
    constructor(label = "unnamed label") {
        // this(label, null);
        this.label = label;
    }

    // constructor(label = "unnamed label", data) {
    //     this.label = label;
    //     if (typeof(data) === Array) {
    //         data.forEach(segment => {
    //             this.addSegmentData(segment);
    //         });
    //     } else {
    //         this.addSegmentData(data);
    //     }
    // }

    /**
     * @description add one SegmentData into this GroupData.
     * @param {SegmentData} segmentData the segment for add
     */
    addSegmentData(segmentData) {
        if (Object.getPrototypeOf(segmentData) === SegmentData.prototype) {
            this.data.push(segmentData);
        }
    }
}

/**
 * @class Group
 * @description the class of TimeLine data - Group, contains an array of GroupData.
 */
class Group {
    group = "";
    data = [];

    constructor(group = "unnamed label") {
        // this(group, null);
        this.group = group;
    }

    // constructor(group = "unnamed group", data) {
    //     this.group = group;
    //     if (typeof(data) === Array) {
    //         data.forEach(groupData => {
    //             this.addGroupData(groupData);
    //         });
    //     } else {
    //         this.addGroupData(data);
    //     }
    // }

    addGroupData(groupData) {
        if (Object.getPrototypeOf(groupData) === GroupData.prototype) {
            this.data.push(groupData);
        }
    }
}