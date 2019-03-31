import { Component, OnInit } from '@angular/core';
import { JsonResultService } from '../json-result.service';
import { UsefulUtilsService } from '../useful-utils.service';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {

  tagCount=0;
  tagArray=[];
  isPresent=true;
  resProp={
    "Description" : "Information about the value",
    "Value" : "Value to return",
    "Export" : {"Name" : "Value to export"}
  };
  constructor(public result:JsonResultService, public util:UsefulUtilsService) { }

  ngOnInit() {
  }

  addOutput(){
    this.tagCount+=1;
    this.tagArray.push(this.tagCount);
  }

  onRemove(value){
    this.isPresent=false;
    if(value.resourceName)    this.result.jsonresult.Outputs[value.resourceName]=undefined;
  }

  onDone(value){
    console.log(value);
    this.result.jsonresult.Outputs[value.resourceName]={
      "Description":value.desc,
      "Value":this.util.getProperJson(value.value),
      "Export":{
        "Name":this.util.getProperJson(value.export)
      }
    }
  }
}