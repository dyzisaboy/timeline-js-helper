/**
 * @class SegmentData
 * @description the class of TimeLine Data - Segment.
 */
class SegmentData {

    /**
     * @constructor Constructor of SegmentData.
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

    /**
     * @property Label of GroupData.
     */
    label = "";

    /**
     * @property data array.
     */
    data = [];

    /**
     * @constructor Constructor of GroupData.
     * @param {String} label GroupData Label.
     * @param {SegmentData[]} data SegmentData Array.
     */
    constructor(label = "unnamed label", data) {
        this.label = label;
        if (data === undefined) {
            this.addSegmentData(data);
        }
    }

    /**
     * @description add one SegmentData into this GroupData.
     * @param {...SegmentData} segmentData the segment(s) for adding
     */
    addSegmentData(...segmentData) {
        segmentData = segmentData.filter(e => e !== undefined); // remove undefined elements.
        segmentData = segmentData.filter(e => Object.getPrototypeOf(e) === SegmentData.prototype); // remove invalid elements.
        segmentData.forEach(e => this.data.push(e)); // add all segmentData.
    }
}

/**
 * @class Group
 * @description the class of TimeLine data - Group, contains an array of GroupData.
 */
class Group {

    /**
     * @property Group name.
     */
    group = "";

    /**
     * @property data array.
     */
    data = [];

    /**
     * @constructor Constructor of GroupData.
     * @param {String} group Group name.
     * @param {GroupData[]} data GroupData Array.
     */
    constructor(group = "unnamed group", data) {
        this.group = group;
        if (data === undefined) {
            this.addGroupData(data);
        }
    }

    /**
     * @description add one GroupData into this Group.
     * @param  {...GroupData} groupData the groupData(s) for adding
     */
    addGroupData(...groupData) {
        groupData = groupData.filter(e => e !== undefined); // remove undefined elements.
        groupData = groupData.filter(e => Object.getPrototypeOf(e) === GroupData.prototype); // remove invalid elements.
        groupData.forEach(e => this.data.push(e)); // add all segmentData.
    }
}