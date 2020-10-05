import chai  from "chai" ;
import http  from "chai-http" ;
import app from "../../src/app"
chai.use(http)
describe("created movie", () => {
  it ("created",done=>{
      chai.request(app).post("/api/new-movie").type("json")
      .send({title:"hola",description:"mundo"})
      .end((err,res)=>{
          chai.expect(res).to.have.status(200)
          chai.assert.equal(res.body.data.title, "hola" );
          chai.assert.equal(res.body.data.description, "mundo" );
          done()

      })
  })
});
describe("create review",() => {
    it ("disable", done=>{
        chai.request(app).post("/api/new-review-movie").type("json")
        .send({title:"hola",titleReview:"great",
        review:"is a great movie",
        author:"hector",})
        .end((err,res)=>{
            chai.expect(res).to.have.status(200)
            chai.assert.equal(res.body.data.title, "great" );
            chai.assert.equal(res.body.data.review, "is a great movie" );
            console.log(res.body.message)
            chai.request(app).get("/api/get-reviews/hola").type("json")
        .send({})
        .end((err,res)=>{
            chai.expect(res).to.have.status(200)
            console.log(res.body)
            done()
  
        })
  
        })
    })
  });   
describe("disabled movie",() => {
    it ("disable", done=>{
        chai.request(app).get("/api/get-movie/hola")
        .send({})
        .end((err,res)=>{
            chai.expect(res).to.have.status(200)
            chai.assert.equal(res.body.data.title, "hola" );
            chai.request(app).post("/api/disable-movie").type("json")
        .send({title:"hola"})
        .end((err,res)=>{
            chai.expect(res).to.have.status(200)
            chai.request(app).get("/api/get-movie/hola")
            .send({})
            .end((err,res)=>{
                chai.expect(res).to.have.status(400)
                done()
      
            })
  
        })
  
        })
    })
  });

  describe("filter movie",() => {
    it ("disable", done=>{
        chai.request(app).get("/api/get-movies/10/title")
        .send({})
        .end((err,res)=>{
            chai.expect(res).to.have.status(200)
            chai.assert.equal(res.body.data.length,10 );
            chai.assert.equal(res.body.data[0].id,1 );
            done()
  
        })
    })
  });