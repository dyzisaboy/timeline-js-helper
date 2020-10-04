var TaskTypes = {
    stop: "Stop Process",
    addLib: "Prepare Library",
    uatRelease:  "UAT Release",
    prodRelease:  "Prod Release",
    test:  "Test",
    monitor:  "Monitor",
    rest:  "Break"
}

/**
 * @deprecated
 */
function getMyData() {

    let mwGroup = new Group("MW");

    let mitsGroupData = new GroupData("MTS");
    let mmmsGroupData = new GroupData("MMS");
    let mwRestGroupData = new GroupData("MW Rest");

    mitsGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 9:30:00"), new Date("2020/09/26 10:00:00"), TaskTypes.prodRelease));
    mitsGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 10:00:00"), new Date("2020/09/26 10:30:00"), TaskTypes.test));
    mmmsGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 10:30:00"), new Date("2020/09/26 11:00:00"), TaskTypes.prodRelease));
    mwRestGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 11:00:00"), new Date("2020/09/26 13:00:00"), TaskTypes.rest));
    
    mwGroup.addGroupData(mwRestGroupData);
    mwGroup.addGroupData(mitsGroupData);
    mwGroup.addGroupData(mmmsGroupData);

    let eai1GroupData = new GroupData("EAI-1");
    let eai2GroupData = new GroupData("EAI-2");
    let eaiMonitorGroupData = new GroupData("EAI-Monitor");

    eai1GroupData.addSegmentData(new SegmentData(new Date("2020/09/26 14:00:00"), new Date("2020/09/26 18:00:00"), TaskTypes.prodRelease));
    mwRestGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 18:00:00"), new Date("2020/09/26 19:00:00"), TaskTypes.rest));
    eai2GroupData.addSegmentData(new SegmentData(new Date("2020/09/26 19:00:00"), new Date("2020/09/27 00:00:00"), TaskTypes.prodRelease));
    eaiMonitorGroupData.addSegmentData(new SegmentData(new Date("2020/09/27 00:00:00"), new Date("2020/09/27 11:00:00"), TaskTypes.monitor));
    mwRestGroupData.addSegmentData(new SegmentData(new Date("2020/09/27 11:00:00"), new Date("2020/09/27 12:00:00"), TaskTypes.rest));
    eaiMonitorGroupData.addSegmentData(new SegmentData(new Date("2020/09/27 12:00:00"), new Date("2020/09/27 18:00:00"), TaskTypes.monitor));
    mwRestGroupData.addSegmentData(new SegmentData(new Date("2020/09/27 19:00:00"), new Date("2020/09/28 08:00:00"), TaskTypes.rest));
    eaiMonitorGroupData.addSegmentData(new SegmentData(new Date("2020/09/28 08:00:00"), new Date("2020/09/28 18:00:00"), TaskTypes.monitor));

    mwGroup.addGroupData(eai1GroupData);
    mwGroup.addGroupData(eai2GroupData);
    mwGroup.addGroupData(eaiMonitorGroupData);

    let otherGroup = new Group("Other");

    let mbaGroupData = new GroupData("MBA");
    let mbaRestGroupData = new GroupData("MBA Rest");

    mbaGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 14:00:00"), new Date("2020/09/26 15:00:00"), TaskTypes.prodRelease));
    mbaGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 15:00:00"), new Date("2020/09/26 16:00:00"), TaskTypes.test));
    mbaRestGroupData.addSegmentData(new SegmentData(new Date("2020/09/26 09:00:00"), new Date("2020/10/26 14:00:00"), TaskTypes.rest));
    otherGroup.addGroupData(mbaRestGroupData);
    otherGroup.addGroupData(mbaGroupData);

    return [mwGroup, otherGroup];
}

function getSampleReleaseData() {
    let sysA = new Group("System Group A", [
        new GroupData("Front(Mike & Jone)", [
            new SegmentData("2020-09-26 09:00:00", "2020-09-26 09:10:00", TaskTypes.stop),
            new SegmentData("2020-09-26 09:10:00", "2020-09-26 09:30:00", TaskTypes.addLib),
            new SegmentData("2020-09-26 09:30:00", "2020-09-26 10:00:00", TaskTypes.prodRelease),
            new SegmentData("2020-09-26 10:00:00", "2020-09-26 10:30:00", TaskTypes.test),
            new SegmentData("2020-09-26 10:30:00", "2020-09-26 13:00:00", TaskTypes.rest),
            new SegmentData("2020-09-26 13:00:00", "2020-09-26 18:00:00", TaskTypes.monitor)
        ])
    ]);

    let sysB = new Group("System Group B", [

        new GroupData("End(Neo & Pill)", [
            new SegmentData("2020-09-26 09:10:00", "2020-09-26 09:20:00", TaskTypes.stop),
            new SegmentData("2020-09-26 09:30:00", "2020-09-26 10:00:00", TaskTypes.addLib),
            new SegmentData("2020-09-26 10:00:00", "2020-09-26 11:00:00", TaskTypes.prodRelease),
            new SegmentData("2020-09-26 11:00:00", "2020-09-26 11:30:00", TaskTypes.test),
            new SegmentData("2020-09-26 11:30:00", "2020-09-26 13:00:00", TaskTypes.rest),
            new SegmentData("2020-09-26 13:00:00", "2020-09-26 18:00:00", TaskTypes.monitor)
        ]),
        new GroupData("Middle(linda & rob)", [
            new SegmentData("2020-09-26 09:20:00", "2020-09-26 09:30:00", TaskTypes.stop),
            new SegmentData("2020-09-26 09:30:00", "2020-09-26 10:00:00", TaskTypes.addLib),
            new SegmentData("2020-09-26 10:00:00", "2020-09-26 11:00:00", TaskTypes.prodRelease),
            new SegmentData("2020-09-26 11:00:00", "2020-09-26 11:30:00", TaskTypes.test),
            new SegmentData("2020-09-26 11:30:00", "2020-09-26 13:00:00", TaskTypes.rest),
            new SegmentData("2020-09-26 13:00:00", "2020-09-26 18:00:00", TaskTypes.monitor)
        ])
    ]);

    return [sysA, sysB];
}