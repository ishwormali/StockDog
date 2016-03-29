'use strict';

describe('Service: WatshlistService', function () {

  // load the service's module
  beforeEach(module('stockDogApp'));

  // instantiate service
  var WatshlistService;
  beforeEach(inject(function (_WatshlistService_) {
    WatshlistService = _WatshlistService_;
  }));

  it('should do something', function () {
    expect(!!WatshlistService).toBe(true);
  });

});
