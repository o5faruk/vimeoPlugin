describe('Unit : vimeoPlugin content services', function () {
  describe('Unit: Buildfire Provider', function () {
    var Buildfire;
    beforeEach(module('vimeoPluginContent'));
    beforeEach(inject(function (_Buildfire_) {
      Buildfire = _Buildfire_;
    }));

    it('Buildfire should exist and be an object', function () {
      expect(typeof Buildfire).toEqual('object');
    });
  });
  describe('Unit : DataStore Factory', function () {
    var DataStore, Buildfire, STATUS_MESSAGES, STATUS_CODE, q;
    beforeEach(module('vimeoPluginContent'));
    beforeEach(inject(function (_DataStore_, _STATUS_CODE_, _STATUS_MESSAGES_) {
      DataStore = _DataStore_;
      Buildfire = {
        datastore: {}
      };
      Buildfire.datastore = jasmine.createSpyObj('Buildfire.datastore', ['get','insert','update', 'save', 'delete']);
    }));

    it('DataStore should exist and be an object', function () {
      expect(typeof DataStore).toEqual('object');
    });
    it('DataStore.get should exist and be a function', function () {
      expect(typeof DataStore.get).toEqual('function');
    });
    it('DataStore.getById should exist and be a function', function () {
      expect(typeof DataStore.getById).toEqual('function');
    });
    it('DataStore.insert should exist and be a function', function () {
      expect(typeof DataStore.insert).toEqual('function');
    });
    it('DataStore.update should exist and be a function', function () {
      expect(typeof DataStore.update).toEqual('function');
    });
    it('DataStore.save should exist and be a function', function () {
      expect(typeof DataStore.save).toEqual('function');
    });
    it('DataStore.deleteById should exist and be a function', function () {
      expect(typeof DataStore.deleteById).toEqual('function');
    });
  });
  describe('Unit : Utils Factory', function () {
    var Utils;
    beforeEach(module('vimeoPluginContent'));

    beforeEach(inject(function (_Utils_) {
      Utils = _Utils_;
    }));
    it('Utils should exist and be an object', function () {
      expect(typeof Utils).toEqual('object');
    });
    it('Utils.extractSingleVideoId should exist and be a function', function () {
      expect(typeof Utils.extractSingleVideoId).toEqual('function');
    });
    it('Utils.extractChannelId should exist and be a function', function () {
      expect(typeof Utils.extractChannelId).toEqual('function');
    });
    it('Utils.extractSingleVideoId should return a valid videoId', function () {
      var url = "https://vimeo.com/133130486";
      var videoId = Utils.extractSingleVideoId(url);
      expect(videoId).toEqual('133130486');
    });
    it('Utils.extractSingleVideoId should return null', function () {
      var url = "https://vimeo.com/ondemand/thefranciseffect";
      var videoId = Utils.extractSingleVideoId(url);
      expect(videoId).toEqual(null);
    });
    it('Utils.extractChannelId should return a valid channelId', function () {
      var url = "https://vimeo.com/channels/staffpicks/137925379";
      var channelId = Utils.extractChannelId(url);
      expect(channelId).toEqual('staffpicks/137925379');
    });
    it('Utils.extractChannelId should return null', function () {
      var url = "https://vimeo.com/ondemand/thefranciseffect";
      var channelId = Utils.extractChannelId(url);
      expect(channelId).toEqual(null);
    });
  });
});