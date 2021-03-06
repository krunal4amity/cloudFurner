import { Component, OnInit, Input } from '@angular/core';
import {RESOURCE_DATA, ResourceSyntax} from './resource-list';
import {AWSResource} from './resource-list';
import {SubResource} from './resource-list';
import { AwsResourcesService } from '../aws-resources.service';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.css']
})
export class ResourceViewComponent implements OnInit {

  constructor(public awsresource:AwsResourcesService) {
  }

  ngOnInit() {
  }

  resourcelist=RESOURCE_DATA;
  resource_detail=[]

  //Route53 resources
  route53_healthcheck=[];
  route53_hostedzone=[];
  route53_recordset=[];
  route53_recordsetgroup=[];

  //Route53 Resolver resources
  r53_resolver_resolverendpoint=[]
  r53_resolver_resolverrule=[]
  r53_resolver_resolverruleassociation=[]

  //IAM resources
  iam_accesskey=[]
  iam_group=[]
  iam_instanceprofile=[]
  iam_managedpolicy=[]
  iam_policy=[]
  iam_role=[]
  iam_servicelinkedrole=[]
  iam_user=[]
  iam_usertogroupaddition=[]

  //EC2 resources
  ec2_volume=[];
  ec2_eip=[];
  ec2_instance=[];
  ec2_securitygroup=[];
  ec2_customergateway=[];
  ec2_dhcpoptions=[];
  ec2_ec2fleet=[];
  ec2_egressonlyinternetgateway=[];
  ec2_eipassociation=[];
  ec2_flowlog=[];
  ec2_host=[];
  ec2_internetgateway=[];
  ec2_launchtemplate=[];
  ec2_natgateway=[];
  ec2_networkacl=[];
  ec2_networkaclentry=[];
  ec2_networkinterface=[];
  ec2_networkinterfaceattachment=[];
  ec2_networkinterfacepermission=[];
  ec2_placementgroup=[];
  ec2_route=[];
  ec2_routetable=[];
  ec2_securitygroupegress=[];
  ec2_securitygroupingress=[];
  ec2_spotfleet=[];
  ec2_subnet=[];
  ec2_subnetcidrblock=[];
  ec2_subnetnetworkaclassociation=[];
  ec2_subnetroutetableassociation=[];
  ec2_transitgateway=[];
  ec2_transitgatewayattachment=[];
  ec2_transitgatewayroute=[];
  ec2_transitgatewayroutetable=[];
  ec2_transitgatewayroutetableassociation=[];
  ec2_transitgatewayroutetablepropagation=[];
  ec2_volumeattachment=[];
  ec2_vpc=[];
  ec2_vpccidrblock=[];
  ec2_vpcdhcpoptionsassociation=[];
  ec2_vpcendpoint=[];
  ec2_vpcendpointconnectionnotification=[];
  ec2_vpcendpointservice=[];
  ec2_vpcendpointservicepermissions=[];
  ec2_vpcgatewayattachment=[];
  ec2_vpcpeeringconnection=[];
  ec2_vpnconnection=[];
  ec2_vpnconnectionroute=[];
  ec2_vpngateway=[];
  ec2_vpngatewayroutepropagation=[];

  //autoscaling
  ag_agGroup=[];
  ag_launchConfiguration=[];
  ag_lifecyclehook=[];
  ag_scalingpolicy=[];
  ag_scheduledAction=[]

  //elbv2
  elbv2_listener=[];
  elbv2_listenercertificate=[];
  elbv2_listenerrule=[];
  elbv2_loadbalancer=[];
  elbv2_targetgroup=[];

  //certificate manager
  acm_certificate=[];

  //dynamodb
  dynamodb_table=[];

  //sqs
  sqs_queue=[];
  sqs_queuepolicy=[];

  //sns
  sns_subscription=[];
  sns_topic=[];
  sns_topicpolicy=[]

  //ecs
  ecs_cluster=[];
  ecs_service=[];
  ecs_taskdefinition=[];

  //cloudtrail
  cloudtrail_trail=[]

  //cloudwatch
  cw_alarm=[]
  cw_dashboard=[]

  //CloudWatch Logs
  cwlogs_destination=[]
  cwlogs_loggroup=[]
  cwlogs_logstream=[]
  cwlogs_metricfilter=[]
  cwlogs_subscriptionfilter=[]

  //CloudWatch Events
  cwevents_eventbuspolicy=[]
  cwevents_rule=[]

  //EKS
  eks_cluster=[]

  //EFS
  efs_filesystem=[]
  efs_mounttarget=[]

  //S3
  s3_bucket=[]
  s3_bucketpolicy=[]

  //ecr
  ecr_repository=[]

  //cloudformation
  cfn_customresource=[]
  cfn_macro=[]
  cfn_stack=[]
  cfn_waitcondition=[]
  cfn_waitconditionhandle=[]

  //lambda
  lambda_alias=[]
  lambda_eventsourcemapping=[]
  lambda_function=[]
  lambda_layerversion=[]
  lambda_layerversionpermission=[]
  lambda_permission=[]
  lambda_version=[]

  //RAM
  ram_resourceshare=[]

  //secretsmanager
  sm_resourcepolicy=[]
  sm_rotationschedule=[]
  sm_secret=[]
  sm_secrettargetattachment=[]

  //codebuild
  cb_project=[]
  cb_sourcecredential=[]

  //mks(kafka)
  msk_cluster=[]

  //elasticsearch
  es_domain=[]

  //rds
  rds_dbcluster=[]
  rds_dbclusterparametergroup=[]
  rds_dbinstance=[]
  rds_dbparametergroup=[]
  rds_dbsecuritygroup=[]
  rds_dbsecuritygroupingress=[]
  rds_dbsubnetgroup=[]
  rds_eventsubscription=[]
  rds_optiongroup=[]

  serviceAddition(subresource:SubResource){
    //console.log(`${subresource.resourcename} ${subresource.resourcecount} ${subresource.resourcesyntax}`);
    subresource.resourcecount = subresource.resourcecount + 1;
    //console.log((subresource.resourcesyntax as string).split("::"));
    this.resource_detail=(subresource.resourcesyntax as string).split("::");
    switch (this.resource_detail[1]) {
      case "Route53":
        if(this.resource_detail[2]=="HealthCheck") this.route53_healthcheck.push(subresource.resourcecount);
        if(this.resource_detail[2]=="HostedZone") this.route53_hostedzone.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RecordSet") this.route53_recordset.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RecordSetGroup") this.route53_recordsetgroup.push(subresource.resourcecount);        
        break;
      case "Route53Resolver":
        if(this.resource_detail[2]=="ResolverEndpoint") this.r53_resolver_resolverendpoint.push(subresource.resourcecount);
        if(this.resource_detail[2]=="ResolverRule") this.r53_resolver_resolverrule.push(subresource.resourcecount);
        if(this.resource_detail[2]=="ResolverRuleAssociation") this.r53_resolver_resolverruleassociation.push(subresource.resourcecount);
        break;
      case "EC2":
        if(this.resource_detail[2]=="Volume") this.ec2_volume.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EIP") this.ec2_eip.push(subresource.resourcecount);               
        if(this.resource_detail[2]=="Instance") this.ec2_instance.push(subresource.resourcecount);               
        if(this.resource_detail[2]=="SecurityGroup") this.ec2_securitygroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="CustomerGateway") this.ec2_customergateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="DHCPOptions") this.ec2_dhcpoptions.push(subresource.resourcecount);        
        if(this.resource_detail[2]=="EC2Fleet") this.ec2_ec2fleet.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EgressOnlyInternetGateway") this.ec2_egressonlyinternetgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="EIPAssociation") this.ec2_eipassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="FlowLog") this.ec2_flowlog.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Host") this.ec2_host.push(subresource.resourcecount);
        if(this.resource_detail[2]=="InternetGateway") this.ec2_internetgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="LaunchTemplate") this.ec2_launchtemplate.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NatGateway") this.ec2_natgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkAcl") this.ec2_networkacl.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkAclEntry") this.ec2_networkaclentry.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterface") this.ec2_networkinterface.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterfaceAttachment") this.ec2_networkinterfaceattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="NetworkInterfacePermission") this.ec2_networkinterfacepermission.push(subresource.resourcecount);
        if(this.resource_detail[2]=="PlacementGroup") this.ec2_placementgroup.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Route") this.ec2_route.push(subresource.resourcecount);
        if(this.resource_detail[2]=="RouteTable") this.ec2_routetable.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SecurityGroupEgress") this.ec2_securitygroupegress.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SecurityGroupIngress") this.ec2_securitygroupingress.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SpotFleet") this.ec2_spotfleet.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Subnet") this.ec2_subnet.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetCidrBlock") this.ec2_subnetcidrblock.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetNetworkAclAssociation") this.ec2_subnetnetworkaclassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="SubnetRouteTableAssociation") this.ec2_subnetroutetableassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGateway") this.ec2_transitgateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayAttachment") this.ec2_transitgatewayattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRoute") this.ec2_transitgatewayroute.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTable") this.ec2_transitgatewayroutetable.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTableAssociation") this.ec2_transitgatewayroutetableassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="TransitGatewayRouteTablePropagation") this.ec2_transitgatewayroutetablepropagation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VolumeAttachment") this.ec2_volumeattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPC") this.ec2_vpc.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCCidrBlock") this.ec2_vpccidrblock.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCDHCPOptionsAssociation") this.ec2_vpcdhcpoptionsassociation.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpoint") this.ec2_vpcendpoint.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointConnectionNotification") this.ec2_vpcendpointconnectionnotification.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointService") this.ec2_vpcendpointservice.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCEndpointServicePermissions") this.ec2_vpcendpointservicepermissions.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCGatewayAttachment") this.ec2_vpcgatewayattachment.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPCPeeringConnection") this.ec2_vpcpeeringconnection.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNConnection") this.ec2_vpnconnection.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNConnectionRoute") this.ec2_vpnconnectionroute.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNGateway") this.ec2_vpngateway.push(subresource.resourcecount);
        if(this.resource_detail[2]=="VPNGatewayRoutePropagation") this.ec2_vpngatewayroutepropagation.push(subresource.resourcecount);
        break;
      case "IAM":
      if(this.resource_detail[2]=="AccessKey") this.iam_accesskey.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Group") this.iam_group.push(subresource.resourcecount);
      if(this.resource_detail[2]=="InstanceProfile") this.iam_instanceprofile.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ManagedPolicy") this.iam_managedpolicy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Policy") this.iam_policy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Role") this.iam_role.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ServiceLinkedRole") this.iam_servicelinkedrole.push(subresource.resourcecount);
      if(this.resource_detail[2]=="User") this.iam_user.push(subresource.resourcecount);
      if(this.resource_detail[2]=="UserToGroupAddition") this.iam_usertogroupaddition.push(subresource.resourcecount);
        break;

      case "AutoScaling":
      if(this.resource_detail[2]=="AutoScalingGroup") this.ag_agGroup.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LaunchConfiguration") this.ag_launchConfiguration.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LifecycleHook") this.ag_lifecyclehook.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ScalingPolicy") this.ag_scalingpolicy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ScheduledAction") this.ag_scheduledAction.push(subresource.resourcecount);
        break;

      case "ElasticLoadBalancingV2":
      if(this.resource_detail[2]=="Listener") this.elbv2_listener.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ListenerCertificate") this.elbv2_listenercertificate.push(subresource.resourcecount);
      if(this.resource_detail[2]=="ListenerRule") this.elbv2_listenerrule.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LoadBalancer") this.elbv2_loadbalancer.push(subresource.resourcecount);
      if(this.resource_detail[2]=="TargetGroup") this.elbv2_targetgroup.push(subresource.resourcecount);
        break;

      case "CertificateManager":
      if(this.resource_detail[2]=="Certificate") this.acm_certificate.push(subresource.resourcecount);      
        break;

      case "SNS":
      if(this.resource_detail[2]=="Subscription") this.sns_subscription.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Topic") this.sns_topic.push(subresource.resourcecount);
      if(this.resource_detail[2]=="TopicPolicy") this.sns_topicpolicy.push(subresource.resourcecount);
      
        break;

      case "SQS":
      if(this.resource_detail[2]=="Queue") this.sqs_queue.push(subresource.resourcecount);
      if(this.resource_detail[2]=="QueuePolicy") this.sqs_queuepolicy.push(subresource.resourcecount);
        break;

      case "DynamoDB":
      if(this.resource_detail[2]=="Table") this.dynamodb_table.push(subresource.resourcecount);
        break;

      case "ECS":
      if(this.resource_detail[2]=="Cluster") this.ecs_cluster.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Service") this.ecs_service.push(subresource.resourcecount);
      if(this.resource_detail[2]=="TaskDefinition") this.ecs_taskdefinition.push(subresource.resourcecount);
        break;
      
      case "CloudTrail":
      if(this.resource_detail[2]=="Trail") this.cloudtrail_trail.push(subresource.resourcecount);
        break;

      case "CloudWatch":
      if(this.resource_detail[2]=="Alarm") this.cw_alarm.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Dashboard") this.cw_dashboard.push(subresource.resourcecount);
        break;

      case "Logs":
      if(this.resource_detail[2]=="Destination") this.cwlogs_destination.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LogGroup") this.cwlogs_loggroup.push(subresource.resourcecount);
      if(this.resource_detail[2]=="LogStream") this.cwlogs_logstream.push(subresource.resourcecount);
      if(this.resource_detail[2]=="MetricFilter") this.cwlogs_metricfilter.push(subresource.resourcecount);
      if(this.resource_detail[2]=="SubscriptionFilter") this.cwlogs_subscriptionfilter.push(subresource.resourcecount);
        break;

      case "Events":
      if(this.resource_detail[2]=="EventBusPolicy") this.cwevents_eventbuspolicy.push(subresource.resourcecount);
      if(this.resource_detail[2]=="Rule") this.cwevents_rule.push(subresource.resourcecount);
        break;

      case "EKS":
      if(this.resource_detail[2]=="Cluster") this.eks_cluster.push(subresource.resourcecount);
        break;

      case "EFS":
      if(this.resource_detail[2]=="FileSystem") this.efs_filesystem.push(subresource.resourcecount);
      if(this.resource_detail[2]=="MountTarget") this.efs_mounttarget.push(subresource.resourcecount);
        break;

      case "S3":
      if(this.resource_detail[2]=="Bucket") this.s3_bucket.push(subresource.resourcecount);
      if(this.resource_detail[2]=="BucketPolicy") this.s3_bucketpolicy.push(subresource.resourcecount);
        break;

      case "ECR":
      if(this.resource_detail[2]=="Repository") this.ecr_repository.push(subresource.resourcecount);
        break;

      case "CloudFormation":
        if(this.resource_detail[2]=="CustomResource") this.cfn_customresource.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Macro") this.cfn_macro.push(subresource.resourcecount);
        if(this.resource_detail[2]=="Stack") this.cfn_stack.push(subresource.resourcecount);
        if(this.resource_detail[2]=="WaitCondition") this.cfn_waitcondition.push(subresource.resourcecount);
        if(this.resource_detail[2]=="WaitConditionHandle") this.cfn_waitconditionhandle.push(subresource.resourcecount);

      case "Lambda":
          if(this.resource_detail[2]=="Alias") this.lambda_alias.push(subresource.resourcecount);
          if(this.resource_detail[2]=="EventSourceMapping") this.lambda_eventsourcemapping.push(subresource.resourcecount);
          if(this.resource_detail[2]=="Function") this.lambda_function.push(subresource.resourcecount);
          if(this.resource_detail[2]=="LayerVersion") this.lambda_layerversion.push(subresource.resourcecount);
          if(this.resource_detail[2]=="LayerVersionPermission") this.lambda_layerversionpermission.push(subresource.resourcecount);
          if(this.resource_detail[2]=="Permission") this.lambda_permission.push(subresource.resourcecount);
          if(this.resource_detail[2]=="Version") this.lambda_version.push(subresource.resourcecount);

      case "RAM":
        if(this.resource_detail[2]=="ResourceShare") this.ram_resourceshare.push(subresource.resourcecount)

      case "SecretsManager":
        if(this.resource_detail[2]=="ResourcePolicy") this.sm_resourcepolicy.push(subresource.resourcecount)
        if(this.resource_detail[2]=="RotationSchedule") this.sm_rotationschedule.push(subresource.resourcecount)
        if(this.resource_detail[2]=="Secret") this.sm_secret.push(subresource.resourcecount)
        if(this.resource_detail[2]=="SecretTargetAttachment") this.sm_secrettargetattachment.push(subresource.resourcecount)

      case "CodeBuild":
        if(this.resource_detail[2]=="Project") this.cb_project.push(subresource.resourcecount)
        if(this.resource_detail[2]=="SourceCredential") this.cb_sourcecredential.push(subresource.resourcecount)        

      case "MSK":
        if(this.resource_detail[2]=="Cluster") this.msk_cluster.push(subresource.resourcecount)

      case "Elasticsearch":
        if(this.resource_detail[2]=="Domain") this.es_domain.push(subresource.resourcecount)

      case "RDS":
        if(this.resource_detail[2]=="DBCluster") this.rds_dbcluster.push(subresource.resourcecount)
        if(this.resource_detail[2]=="DBClusterParameterGroup") this.rds_dbclusterparametergroup.push(subresource.resourcecount)
        if(this.resource_detail[2]=="DBInstance") this.rds_dbinstance.push(subresource.resourcecount)
        if(this.resource_detail[2]=="DBParameterGroup") this.rds_dbparametergroup.push(subresource.resourcecount)
        if(this.resource_detail[2]=="DBSecurityGroup") this.rds_dbsecuritygroup.push(subresource.resourcecount)
        if(this.resource_detail[2]=="DBSecurityGroupIngress") this.rds_dbsecuritygroupingress.push(subresource.resourcecount)
        if(this.resource_detail[2]=="DBSubnetGroup") this.rds_dbsubnetgroup.push(subresource.resourcecount)
        if(this.resource_detail[2]=="EventSubscription") this.rds_eventsubscription.push(subresource.resourcecount)
        if(this.resource_detail[2]=="OptionGroup") this.rds_optiongroup.push(subresource.resourcecount)


      default:
        break;
    }    
  }
}
