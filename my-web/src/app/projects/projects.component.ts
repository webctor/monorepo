import { Component, OnInit } from '@angular/core';
import { trigger, query, stagger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  items = [{
              name: 'Jellyroll Asset Management System',
              company: 'The Walt Disney Company',
              avatar: 'assets/projects/avatar/mickey.png',
              image: 'assets/projects/images/mediamonorail.png',
              description: 'Jellyroll is a system that integrates many concepts and technologies to automate the manufacturing of an asset. Users within the company, and in some cases vendors, access the systems to either ingest or retrieve material that has been archived in the system. Some of the content can be big enough to that using a regular upload/download mechanism is not an option. We created integrations with tools like Signiant and Aspera to accelerate the transfer. Upon ingest, an orchestrated process is triggered. From extraction of metadata to generation of sub-products, the assets are stored using different mechanisms, like long-term storage or solid-state disc for fast retrieval. At the time I left the company, the system was moving an average of 15 TB per day. The frontend was implemented using JQuery, as it was the beginnings of the Single-Page Web Applications as we know them today. The backend was mainly developed in Java using Spring as the Framework of choice. The Asset Management System backbone was EMC Documentum.'
            },
            {
              name: 'Watch ABC Streaming Platform',
              company: 'The Walt Disney Company',
              avatar: 'assets/projects/avatar/mickey.png',
              image: 'assets/projects/images/watch.jpg',
              description: 'I actively participated in the development of the streaming platform for the Watch ABC effort. We were the first studio to provide Live Streaming to mobile devices. The project introduced dynamic Ad Replacement, and deployment in AWS to leverage the elasticity of the computing instances based on the demand of the services.'
            },
            {
              name: 'FOX MediaCloud',
              company: '21st Century Fox',
              avatar: 'assets/projects/avatar/homer.jpg',
              image: 'assets/projects/images/foxmediacloud.png',
              description: 'Having built Digital Asset Management Systems for over five years, I was hired at Fox to work on a similar project. The backbone of the system was based on Artesia OpenText, and the transfer acceleration integration was very similar. We built a system to deal with metadata based on Apache Lucene and we added face recognition capabilities. As frontend frameworks became more popular, we created the GUI with AngularJS 1x. The backend was implemented with C# using Visual Studio. '
            },
            {
              name: 'Mars 2020 EAS Cascade',
              company: 'NASA/Jet Propulsion Laboratory',
              avatar: 'assets/projects/avatar/m2020.png',
              image: 'assets/projects/images/cascade.png',
              description: 'Customizable Application for SpaceCraft Assessment and Data Exploration. The Mars 2020 mission is heavily based on MSL, better known as Curiosity. The team learned a lot from MSL\'s ground systems and the premise of the Engineering Analysis Subsystem (EAS) Team is to apply all that knowledge to how operations is run currently but planning a more integrated system from the beginning. The team\'s mission is to provide systems that aid operations by displaying telemetry in an easy to understand way. We use user-centered design as the user experience is the most important feature in the project. M2020 has very ambitious goals for receiving telemetry, evaluating and creating a plan for the next Sol. Flexibility and Customization of dashboards are very important for our users. The projectwas developed initially using Polymer to create a library of web components that can be easily interchanged with other systems. Nevertheless, the team migrated the components to React since the use of Redux provided immense value to the rapid development of the system.'
            },
            {
              name: 'Project Aerie',
              company: 'NASA/Jet Propulsion Laboratory',
              avatar: 'assets/projects/avatar/nasa.jpg',
              image: 'assets/projects/images/raven.png',
              description: 'Architecting a component-based system for science and mission planning, sequencing, commanding, generation of products and analysis od telemetry for the Advanced Multi-Mission Operating Systems (AMMOS) Program Office. Managed the Mission Planning, Sequencing and Analysis Team that creates software, not just for space exploration projects in the Jet Propulsion Laboratory (JPL), but for other NASA centers. The Aerie architecture is composed of microservices developed mainly in Java with Spring Boot and frontend components developed using Angular 7. The system is designed to be configured and distributed based on a per mission needs, spanning from Cubesats to flag-ship missions, like Europa Clipper. '
            }];

  readMore = true;


  constructor() { }

  ngOnInit() {
  }

  readmore(description) {

    let words: Array<string> = description.split(' ');

    return "something " + words;
  }

}
