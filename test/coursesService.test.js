
require('dotenv').config();
const expect = require('chai').expect;
const CoursesService = require('../src/controller/courses/CoursesService');

describe('COURSES SERVICE UNIT TESTING', function(){
    
    it('1.should return 404 error for invalid course id', async()=>{
      const coursesServiceInst = new CoursesService();
      let courseDeatils = await coursesServiceInst.getCourseDetailsById("InvalidId");
      expect(courseDeatils).to.have.property('statusCode');
      expect(courseDeatils).to.have.property('error');
      expect(courseDeatils).to.have.property('message');
      expect(courseDeatils.statusCode).to.equal(404);
      expect(courseDeatils.error).to.equal('Not Found');
      expect(courseDeatils.message).to.equal('Not Found');
    })
    
    it('2.should return valid course details', async()=>{
        const coursesServiceInst = new CoursesService();
        let courseDeatils = await coursesServiceInst.getCourseDetailsById("ef131a0c-3006-4a38-8cfd-085fa08f8361");
        expect(courseDeatils).to.have.property('id');
        expect(courseDeatils).to.have.property('title');
        expect(courseDeatils).to.have.property('learners');
        expect(courseDeatils).to.have.property('trainer');
        expect(courseDeatils.id).to.equal("ef131a0c-3006-4a38-8cfd-085fa08f8361");
        expect(courseDeatils.title).to.equal('Business-focused bifurcated secured line');
      })

      it('3.should return 404 Error with empty courseId', async()=>{
        const coursesServiceInst = new CoursesService();
        let courseDeatils = await coursesServiceInst.getCourseDetailsById();
        expect(courseDeatils).to.have.property('statusCode');
        expect(courseDeatils).to.have.property('error');
        expect(courseDeatils).to.have.property('message');
        expect(courseDeatils.statusCode).to.equal(404);
        expect(courseDeatils.error).to.equal('Not Found');
        expect(courseDeatils.message).to.equal('Not Found');
      })
    
});