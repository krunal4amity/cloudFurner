import { Component, OnInit } from '@angular/core';
import { GenericResource } from '../../resource-view/generic-resource';
import { ResourceSyntax } from '../../resource-view/resource-list';
import { JsonResultService } from '../../json-result.service';
import { UsefulUtilsService } from '../../useful-utils.service';


@Component({
  selector: 'app-ec2-vpcendpoint-connection-notification',
  templateUrl: './ec2-vpcendpoint-connection-notification.component.html',
  styleUrls: ['./ec2-vpcendpoint-connection-notification.component.css']
})
export class Ec2VPCEndpointConnectionNotificationComponent implements OnInit {
  tagCount:number;
  tagArray;
  isPresent:boolean;
  serviceSyntax:String;
  curRes:GenericResource;

  constructor(public result:JsonResultService, public utility:UsefulUtilsService) {
    var resProp:ResourceSyntax={
      "Type" : "AWS::EC2::VPCEndpointConnectionNotification",
      "Properties" : {
        "ConnectionEvents" : ["*List of string values. One or more endpoint events for which to receive notifications. Valid values are Accept, Connect, Delete, and Reject."],
        "VPCEndpointId" : "The ID of the endpoint",
        "ServiceId" : "The ID of the endpoint service.",
        "ConnectionNotificationArn" : "*The ARN of the SNS topic for the notifications."
      }
    }
    this.serviceSyntax=resProp.Type;
    this.curRes = new GenericResource(resProp, result, utility);
    this.curRes.resObject=resProp;
    this.tagCount=this.curRes.tagCount;
    this.tagArray=this.curRes.tagArray;
    this.isPresent=this.curRes.isPresent;
   }

  ngOnInit() {
  }

  getTypeOf(value){
    return typeof(value);
  }

  isArray(value){
    return Array.isArray(value);
  }

  isRequired(value){
    return this.curRes.isRequired(value);
  }

  addTag(){
    this.curRes.addTag();
  }

  onDone(value){
    this.curRes.onDone(value);
  }

  onRemove(value){
    this.isPresent=false;
    this.curRes.onRemove(value);
  }
}
