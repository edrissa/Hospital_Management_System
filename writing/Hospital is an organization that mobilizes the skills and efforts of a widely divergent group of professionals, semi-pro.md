Hospital is an organization that mobilizes the skills and efforts of a widely divergent group of professionals, semi-professionals, professional‟s personnel, to provide highly personalized personnel services to patients [1].

World health Organization (WHO) has defined hospital as an integral part of social and medical organization that provides the complete curative and preventive health care and treatment to people. Hospitals are the focal points of education for the health professionals and clinical research necessary for advancement of medicine. 

Thus, the hospital is one of the most complexes of all administrative organizations. The main purpose of the hospital is to provide adequate care and treatment to the people. Various operational works that are done in a hospital include: recording information about the Patients, generating bill, recording information related to diagnosis given to Patients, Keeping record of the Immunization provided to patient, Keeping information about various diseases and medicines available to cure them etc [2]. 

All these works are done in most hospitals on papers. The need for proper management of the health sector leads to the creation of an electronic means of keeping records, administering discharge, querying of data, and also good accountability. Information technology in general enables intra organizational networking that facilitates effective information flow within the various units of a firm [3]. 

The application of information technology in health care is unceasingly evolving as the quality of patient care in contemporary times seems to depend on the timely acquisition and processing of clinical information related to the patient [4]. 

The hospital management system (HMS) comprises a computerized web based application for record keeping, tracking and prescriptions with monitoring. HMS can manage multiple users of the system and can have the track of the right assigned to them. 

It makes sure that all the users function with the system as per the rights assigned to them and they can get their work done in efficient manner. 

A good management system should allow for input and output by providing an objective for recording and aggregation information. It should be able to quickly collect and edit data, summarize results, and adjust as well as correct errors promptly [5]. 

Reference [5] designs HMS that Retrieve Information from the database as quickly as one searches on the screen and authenticate the users with the access control facility to prevent unauthorized users from accessing the data but does not include exporting of Data (History) on the database to appear in various formats (PDF, CSV, TXT).

 Reference [6] designs various HMS modules but the system is not designed to manage the affairs of the hospital but only built for the Patient Health Records. 

This paper provides solution to the existing problems of the hospital. The design improves the accuracy of medical records and efficient retrieval and usage of medical records. 



*  poor patient experience

* time management

* data inaccuracy 
* data analysis
* data security





research methodoloy:

Design method describes the procedures for artifact construction (Walls et al. [1992](https://link.springer.com/article/10.1007/s10796-009-9154-3#ref-CR29)). Prototyping is a system development methodology that puts together a working model as a quick way to demonstrate a solution to a problem. In the system implementation stage, a prototype is built to test various aspects of a design, illustrate ideas or features, and gather early user feedback from the evaluation (Sommerville [2007](https://link.springer.com/article/10.1007/s10796-009-9154-3#ref-CR24)). We developed the RHMS system according to our architectural and system design. HyperText Markup Language (HTML), JavaServer Pages (JSP) and Javascript, and Macromedia Flash programming languages were selected for developing the web-based interfaces, as they were portable and compatible with most web browsers. In addition, we used Java and Java Servlets for developing modules in the middle tier, such as session tracking and flow redirecting, because most current application servers like Tomcat widely support these kinds of Java components. Finally, a structured query language (SQL) was used for writing statements and queries in the relational database management system (RDBMS). The Java Database Connectivity (JDBC) protocol was selected for communication between the database server and the application server. Both SQL and ODBC are compatible with a variety of RDBMS databases.

Having developed the system prototype, we tested and evaluated it via systematic procedures. We performed a series of system tests, including module, integration, functionality and performance tests, to ensure that the prototype was free of bugs and errors. We further examined the prototype by inviting domain experts to evaluate it. Evaluations by domain experts help to determine the accuracy of embedded knowledge and the consistency and completeness of responses (Gasching et al. [1983](https://link.springer.com/article/10.1007/s10796-009-9154-3#ref-CR8)).

We actively involved potential users throughout the ISDT process. Their feedback was obtained through different channels, including (i) interviews with different groups of potential users, (ii) comments elicited in informal meetings (iii) and user evaluations of the functional prototype system. User participation in different processes helped to enhance the usability, acceptability, usefulness and reliability of an RHMS in an earlier study (Lee and Girgensohn [2002](https://link.springer.com/article/10.1007/s10796-009-9154-3#ref-CR13)). However, as RFID is a new technology in the healthcare sector, potential users may have difficulty visualising the work situations it would enable. Hence, we need to interpret their feedback with caution.

To obtain comprehensive feedback, we invited 45 potential users, including physicians, nurses, pharmacists and clerical officers to participate in an evaluation of the prototype system. During the evaluation session, we demonstrated the prototype and solicited feedback in the discussion and on an evaluation form. The results of the prototype evaluation were satisfactory and supported the contention that the RHMS system performed its functions as expected. The internal consistency reliabilities were tested and considered acceptable, as the Cronbach’s coefficient alphas were higher than the alpha threshold level of 0.7 (Nunnally [1978](https://link.springer.com/article/10.1007/s10796-009-9154-3#ref-CR22)).

A questionnaire that contained both closed and open-ended questions was also designed to collect users’ views of the effectiveness and usability of the system prototype, and existing, established scales were used in the instrument. For the closed-end questions, potential users were asked to provide answers using a five-point scale (1 = strongly disagree, 3 = undecided, and 5 = strongly agree). The findings of the questionnaire were tabulated in Table [2](https://link.springer.com/article/10.1007/s10796-009-9154-3#Tab2). The results revealed that potential users in general gave high ratings on the effectiveness and usability of the system prototype, with a mean score of least 3.9 on a five-point scale. To ensure the values of our mean responses were statistically significantly different from “3” i.e. the neutral values of the scale (“undecided”), we have run one sample *t*-test using test value “3” on all questionnaire items. The results show that the mean values of all questionnaire items were larger than 3.00 and significant at 5% level. According to analyzed evaluation results described above, we regard the prototype as a promising system that could improve both the overall medical management and operational efficiency as required by the key stakeholders (see Table [1](https://link.springer.com/article/10.1007/s10796-009-9154-3#Tab1)) in the healthcare sector.