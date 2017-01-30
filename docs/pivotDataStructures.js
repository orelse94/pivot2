let data=[
  [2012,'july','q1','fixed','mor',10,1000],
  [2012,'july','q1','fixed','mor',10,1000],
  [2012,'july','q1','fixed','mor',10,1000],
  [2012,'july','q1','fixed','mor',10,1000],
  [2012,'july','q1','fixed','mor',10,1000],
...];

let hierarchy = [{
    name:'year',
    type:'row',
  },{
    name:'month',
    type:'row',
  },{
    name:'quearter',
    type:'row',
  },{
    name:'saleType',
    type:'col',
  },{
    name:'salePerson',
    type:'col',
  },{
    name:'licenses',
    type:'value',
  },{
    name:'amount',
    type:'value',
}];

let headersData = {
  rows:{
    2012:{
      july:{
        q1:[refToRowInData,refToRowInData,...],
        q3:[refToRowInData,refToRowInData,...],
      },
    },{
      may:{
        q1:[refToRowInData,refToRowInData,...],
        q4:[refToRowInData,refToRowInData,...],
      },
    },{
      april:{
        q1:[refToRowInData,refToRowInData,...],
      },
    },
    2014:{
      july:{
        q1:[refToRowInData,refToRowInData,...],
        q3:[refToRowInData,refToRowInData,...],
      },
    },{
      april:{
        q1:[refToRowInData,refToRowInData,...],
        q2:[refToRowInData,refToRowInData,...],
      },
    },
  },
  cols:{
    fixed:{
      mor:[refToRowInData,refToRowInData,...],
      jhonathan:[refToRowInData,refToRowInData,...],
    },
    auction:{
      mor:[refToRowInData,refToRowInData,...],
      igor:[refToRowInData,refToRowInData,...],
    },
  },
}
