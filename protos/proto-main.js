/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Main = (function() {

    function Main(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Main.prototype.type = "";
    Main.prototype.data = $util.newBuffer([]);

    Main.create = function create(properties) {
        return new Main(properties);
    };

    Main.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(2).string(message.type);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(10).bytes(message.data);
        return writer;
    };

    Main.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Main.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Main();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.type = reader.string();
                break;
            case 1:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Main.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Main.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    Main.fromObject = function fromObject(object) {
        if (object instanceof $root.Main)
            return object;
        var message = new $root.Main();
        if (object.type != null)
            message.type = String(object.type);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    Main.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    Main.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Main;
})();

$root.IndexQuote = (function() {

    function IndexQuote(properties) {
        this.orderbook = [];
        this.recentTrade = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    IndexQuote.prototype.crossSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    IndexQuote.prototype.timestampE6 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    IndexQuote.prototype.topic = "";
    IndexQuote.prototype.type = "";
    IndexQuote.prototype.orderbook = $util.emptyArray;
    IndexQuote.prototype.recentTrade = $util.emptyArray;
    IndexQuote.prototype.instrument = null;

    IndexQuote.create = function create(properties) {
        return new IndexQuote(properties);
    };

    IndexQuote.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.crossSeq != null && Object.hasOwnProperty.call(message, "crossSeq"))
            writer.uint32(0).int64(message.crossSeq);
        if (message.timestampE6 != null && Object.hasOwnProperty.call(message, "timestampE6"))
            writer.uint32(8).int64(message.timestampE6);
        if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
            writer.uint32(18).string(message.topic);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(26).string(message.type);
        if (message.orderbook != null && message.orderbook.length)
            for (var i = 0; i < message.orderbook.length; ++i)
                $root.IndexQuote.Orderbook.encode(message.orderbook[i], writer.uint32(34).fork()).ldelim();
        if (message.recentTrade != null && message.recentTrade.length)
            for (var i = 0; i < message.recentTrade.length; ++i)
                $root.IndexQuote.RecentTrade.encode(message.recentTrade[i], writer.uint32(42).fork()).ldelim();
        if (message.instrument != null && Object.hasOwnProperty.call(message, "instrument"))
            $root.IndexQuote.Instrument.encode(message.instrument, writer.uint32(50).fork()).ldelim();
        return writer;
    };

    IndexQuote.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    IndexQuote.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IndexQuote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.crossSeq = reader.int64();
                break;
            case 1:
                message.timestampE6 = reader.int64();
                break;
            case 2:
                message.topic = reader.string();
                break;
            case 3:
                message.type = reader.string();
                break;
            case 4:
                if (!(message.orderbook && message.orderbook.length))
                    message.orderbook = [];
                message.orderbook.push($root.IndexQuote.Orderbook.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.recentTrade && message.recentTrade.length))
                    message.recentTrade = [];
                message.recentTrade.push($root.IndexQuote.RecentTrade.decode(reader, reader.uint32()));
                break;
            case 6:
                message.instrument = $root.IndexQuote.Instrument.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    IndexQuote.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    IndexQuote.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.crossSeq != null && message.hasOwnProperty("crossSeq"))
            if (!$util.isInteger(message.crossSeq) && !(message.crossSeq && $util.isInteger(message.crossSeq.low) && $util.isInteger(message.crossSeq.high)))
                return "crossSeq: integer|Long expected";
        if (message.timestampE6 != null && message.hasOwnProperty("timestampE6"))
            if (!$util.isInteger(message.timestampE6) && !(message.timestampE6 && $util.isInteger(message.timestampE6.low) && $util.isInteger(message.timestampE6.high)))
                return "timestampE6: integer|Long expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.orderbook != null && message.hasOwnProperty("orderbook")) {
            if (!Array.isArray(message.orderbook))
                return "orderbook: array expected";
            for (var i = 0; i < message.orderbook.length; ++i) {
                var error = $root.IndexQuote.Orderbook.verify(message.orderbook[i]);
                if (error)
                    return "orderbook." + error;
            }
        }
        if (message.recentTrade != null && message.hasOwnProperty("recentTrade")) {
            if (!Array.isArray(message.recentTrade))
                return "recentTrade: array expected";
            for (var i = 0; i < message.recentTrade.length; ++i) {
                var error = $root.IndexQuote.RecentTrade.verify(message.recentTrade[i]);
                if (error)
                    return "recentTrade." + error;
            }
        }
        if (message.instrument != null && message.hasOwnProperty("instrument")) {
            var error = $root.IndexQuote.Instrument.verify(message.instrument);
            if (error)
                return "instrument." + error;
        }
        return null;
    };

    IndexQuote.fromObject = function fromObject(object) {
        if (object instanceof $root.IndexQuote)
            return object;
        var message = new $root.IndexQuote();
        if (object.crossSeq != null)
            if ($util.Long)
                (message.crossSeq = $util.Long.fromValue(object.crossSeq)).unsigned = false;
            else if (typeof object.crossSeq === "string")
                message.crossSeq = parseInt(object.crossSeq, 10);
            else if (typeof object.crossSeq === "number")
                message.crossSeq = object.crossSeq;
            else if (typeof object.crossSeq === "object")
                message.crossSeq = new $util.LongBits(object.crossSeq.low >>> 0, object.crossSeq.high >>> 0).toNumber();
        if (object.timestampE6 != null)
            if ($util.Long)
                (message.timestampE6 = $util.Long.fromValue(object.timestampE6)).unsigned = false;
            else if (typeof object.timestampE6 === "string")
                message.timestampE6 = parseInt(object.timestampE6, 10);
            else if (typeof object.timestampE6 === "number")
                message.timestampE6 = object.timestampE6;
            else if (typeof object.timestampE6 === "object")
                message.timestampE6 = new $util.LongBits(object.timestampE6.low >>> 0, object.timestampE6.high >>> 0).toNumber();
        if (object.topic != null)
            message.topic = String(object.topic);
        if (object.type != null)
            message.type = String(object.type);
        if (object.orderbook) {
            if (!Array.isArray(object.orderbook))
                throw TypeError(".IndexQuote.orderbook: array expected");
            message.orderbook = [];
            for (var i = 0; i < object.orderbook.length; ++i) {
                if (typeof object.orderbook[i] !== "object")
                    throw TypeError(".IndexQuote.orderbook: object expected");
                message.orderbook[i] = $root.IndexQuote.Orderbook.fromObject(object.orderbook[i]);
            }
        }
        if (object.recentTrade) {
            if (!Array.isArray(object.recentTrade))
                throw TypeError(".IndexQuote.recentTrade: array expected");
            message.recentTrade = [];
            for (var i = 0; i < object.recentTrade.length; ++i) {
                if (typeof object.recentTrade[i] !== "object")
                    throw TypeError(".IndexQuote.recentTrade: object expected");
                message.recentTrade[i] = $root.IndexQuote.RecentTrade.fromObject(object.recentTrade[i]);
            }
        }
        if (object.instrument != null) {
            if (typeof object.instrument !== "object")
                throw TypeError(".IndexQuote.instrument: object expected");
            message.instrument = $root.IndexQuote.Instrument.fromObject(object.instrument);
        }
        return message;
    };

    IndexQuote.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.orderbook = [];
            object.recentTrade = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.crossSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.crossSeq = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestampE6 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestampE6 = options.longs === String ? "0" : 0;
            object.topic = "";
            object.type = "";
            object.instrument = null;
        }
        if (message.crossSeq != null && message.hasOwnProperty("crossSeq"))
            if (typeof message.crossSeq === "number")
                object.crossSeq = options.longs === String ? String(message.crossSeq) : message.crossSeq;
            else
                object.crossSeq = options.longs === String ? $util.Long.prototype.toString.call(message.crossSeq) : options.longs === Number ? new $util.LongBits(message.crossSeq.low >>> 0, message.crossSeq.high >>> 0).toNumber() : message.crossSeq;
        if (message.timestampE6 != null && message.hasOwnProperty("timestampE6"))
            if (typeof message.timestampE6 === "number")
                object.timestampE6 = options.longs === String ? String(message.timestampE6) : message.timestampE6;
            else
                object.timestampE6 = options.longs === String ? $util.Long.prototype.toString.call(message.timestampE6) : options.longs === Number ? new $util.LongBits(message.timestampE6.low >>> 0, message.timestampE6.high >>> 0).toNumber() : message.timestampE6;
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.orderbook && message.orderbook.length) {
            object.orderbook = [];
            for (var j = 0; j < message.orderbook.length; ++j)
                object.orderbook[j] = $root.IndexQuote.Orderbook.toObject(message.orderbook[j], options);
        }
        if (message.recentTrade && message.recentTrade.length) {
            object.recentTrade = [];
            for (var j = 0; j < message.recentTrade.length; ++j)
                object.recentTrade[j] = $root.IndexQuote.RecentTrade.toObject(message.recentTrade[j], options);
        }
        if (message.instrument != null && message.hasOwnProperty("instrument"))
            object.instrument = $root.IndexQuote.Instrument.toObject(message.instrument, options);
        return object;
    };

    IndexQuote.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    IndexQuote.Side = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Buy"] = 0;
        values[valuesById[1] = "Sell"] = 1;
        return values;
    })();

    IndexQuote.Symbol = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BTCUSD"] = 0;
        values[valuesById[1] = "ETHUSD"] = 1;
        return values;
    })();

    IndexQuote.TickDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ZeroMinusTick"] = 0;
        values[valuesById[1] = "ZeroPlusTick"] = 1;
        return values;
    })();

    IndexQuote.Orderbook = (function() {

        function Orderbook(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Orderbook.prototype.id = 0;
        Orderbook.prototype.price = 0;
        Orderbook.prototype.side = 0;
        Orderbook.prototype.size = 0;
        Orderbook.prototype.symbol = 0;

        Orderbook.create = function create(properties) {
            return new Orderbook(properties);
        };

        Orderbook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(0).int32(message.id);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(9).double(message.price);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(16).int32(message.side);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(25).double(message.size);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(32).int32(message.symbol);
            return writer;
        };

        Orderbook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Orderbook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IndexQuote.Orderbook();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.id = reader.int32();
                    break;
                case 1:
                    message.price = reader.double();
                    break;
                case 2:
                    message.side = reader.int32();
                    break;
                case 3:
                    message.size = reader.double();
                    break;
                case 4:
                    message.symbol = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Orderbook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Orderbook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size !== "number")
                    return "size: number expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                switch (message.symbol) {
                default:
                    return "symbol: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        Orderbook.fromObject = function fromObject(object) {
            if (object instanceof $root.IndexQuote.Orderbook)
                return object;
            var message = new $root.IndexQuote.Orderbook();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.price != null)
                message.price = Number(object.price);
            switch (object.side) {
            case "Buy":
            case 0:
                message.side = 0;
                break;
            case "Sell":
            case 1:
                message.side = 1;
                break;
            }
            if (object.size != null)
                message.size = Number(object.size);
            switch (object.symbol) {
            case "BTCUSD":
            case 0:
                message.symbol = 0;
                break;
            case "ETHUSD":
            case 1:
                message.symbol = 1;
                break;
            }
            return message;
        };

        Orderbook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.price = 0;
                object.side = options.enums === String ? "Buy" : 0;
                object.size = 0;
                object.symbol = options.enums === String ? "BTCUSD" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.IndexQuote.Side[message.side] : message.side;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = options.json && !isFinite(message.size) ? String(message.size) : message.size;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = options.enums === String ? $root.IndexQuote.Symbol[message.symbol] : message.symbol;
            return object;
        };

        Orderbook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Orderbook;
    })();

    IndexQuote.RecentTrade = (function() {

        function RecentTrade(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RecentTrade.prototype.execID = "";
        RecentTrade.prototype.execPrice = "";
        RecentTrade.prototype.qty = 0;
        RecentTrade.prototype.execTime = "";
        RecentTrade.prototype.side = 0;
        RecentTrade.prototype.symbol = 0;
        RecentTrade.prototype.tickDirection = 0;
        RecentTrade.prototype.transactTimeE6 = 0;

        RecentTrade.create = function create(properties) {
            return new RecentTrade(properties);
        };

        RecentTrade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.execID != null && Object.hasOwnProperty.call(message, "execID"))
                writer.uint32(2).string(message.execID);
            if (message.execPrice != null && Object.hasOwnProperty.call(message, "execPrice"))
                writer.uint32(10).string(message.execPrice);
            if (message.qty != null && Object.hasOwnProperty.call(message, "qty"))
                writer.uint32(17).double(message.qty);
            if (message.execTime != null && Object.hasOwnProperty.call(message, "execTime"))
                writer.uint32(26).string(message.execTime);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(32).int32(message.side);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(40).int32(message.symbol);
            if (message.tickDirection != null && Object.hasOwnProperty.call(message, "tickDirection"))
                writer.uint32(48).int32(message.tickDirection);
            if (message.transactTimeE6 != null && Object.hasOwnProperty.call(message, "transactTimeE6"))
                writer.uint32(56).uint32(message.transactTimeE6);
            return writer;
        };

        RecentTrade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RecentTrade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IndexQuote.RecentTrade();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.execID = reader.string();
                    break;
                case 1:
                    message.execPrice = reader.string();
                    break;
                case 2:
                    message.qty = reader.double();
                    break;
                case 3:
                    message.execTime = reader.string();
                    break;
                case 4:
                    message.side = reader.int32();
                    break;
                case 5:
                    message.symbol = reader.int32();
                    break;
                case 6:
                    message.tickDirection = reader.int32();
                    break;
                case 7:
                    message.transactTimeE6 = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RecentTrade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RecentTrade.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.execID != null && message.hasOwnProperty("execID"))
                if (!$util.isString(message.execID))
                    return "execID: string expected";
            if (message.execPrice != null && message.hasOwnProperty("execPrice"))
                if (!$util.isString(message.execPrice))
                    return "execPrice: string expected";
            if (message.qty != null && message.hasOwnProperty("qty"))
                if (typeof message.qty !== "number")
                    return "qty: number expected";
            if (message.execTime != null && message.hasOwnProperty("execTime"))
                if (!$util.isString(message.execTime))
                    return "execTime: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                switch (message.symbol) {
                default:
                    return "symbol: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.tickDirection != null && message.hasOwnProperty("tickDirection"))
                switch (message.tickDirection) {
                default:
                    return "tickDirection: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.transactTimeE6 != null && message.hasOwnProperty("transactTimeE6"))
                if (!$util.isInteger(message.transactTimeE6))
                    return "transactTimeE6: integer expected";
            return null;
        };

        RecentTrade.fromObject = function fromObject(object) {
            if (object instanceof $root.IndexQuote.RecentTrade)
                return object;
            var message = new $root.IndexQuote.RecentTrade();
            if (object.execID != null)
                message.execID = String(object.execID);
            if (object.execPrice != null)
                message.execPrice = String(object.execPrice);
            if (object.qty != null)
                message.qty = Number(object.qty);
            if (object.execTime != null)
                message.execTime = String(object.execTime);
            switch (object.side) {
            case "Buy":
            case 0:
                message.side = 0;
                break;
            case "Sell":
            case 1:
                message.side = 1;
                break;
            }
            switch (object.symbol) {
            case "BTCUSD":
            case 0:
                message.symbol = 0;
                break;
            case "ETHUSD":
            case 1:
                message.symbol = 1;
                break;
            }
            switch (object.tickDirection) {
            case "ZeroMinusTick":
            case 0:
                message.tickDirection = 0;
                break;
            case "ZeroPlusTick":
            case 1:
                message.tickDirection = 1;
                break;
            }
            if (object.transactTimeE6 != null)
                message.transactTimeE6 = object.transactTimeE6 >>> 0;
            return message;
        };

        RecentTrade.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.execID = "";
                object.execPrice = "";
                object.qty = 0;
                object.execTime = "";
                object.side = options.enums === String ? "Buy" : 0;
                object.symbol = options.enums === String ? "BTCUSD" : 0;
                object.tickDirection = options.enums === String ? "ZeroMinusTick" : 0;
                object.transactTimeE6 = 0;
            }
            if (message.execID != null && message.hasOwnProperty("execID"))
                object.execID = message.execID;
            if (message.execPrice != null && message.hasOwnProperty("execPrice"))
                object.execPrice = message.execPrice;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = options.json && !isFinite(message.qty) ? String(message.qty) : message.qty;
            if (message.execTime != null && message.hasOwnProperty("execTime"))
                object.execTime = message.execTime;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.IndexQuote.Side[message.side] : message.side;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = options.enums === String ? $root.IndexQuote.Symbol[message.symbol] : message.symbol;
            if (message.tickDirection != null && message.hasOwnProperty("tickDirection"))
                object.tickDirection = options.enums === String ? $root.IndexQuote.TickDirection[message.tickDirection] : message.tickDirection;
            if (message.transactTimeE6 != null && message.hasOwnProperty("transactTimeE6"))
                object.transactTimeE6 = message.transactTimeE6;
            return object;
        };

        RecentTrade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecentTrade;
    })();

    IndexQuote.Instrument = (function() {

        function Instrument(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Instrument.prototype.id = 0;
        Instrument.prototype.crossSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Instrument.prototype.countdownHour = 0;
        Instrument.prototype.createdAt = "";
        Instrument.prototype.fundingRateE6 = 0;
        Instrument.prototype.highPrice24hE4 = 0;
        Instrument.prototype.indexPriceE4 = 0;
        Instrument.prototype.lastTickDirection = 0;
        Instrument.prototype.lowPrice24hE4 = 0;
        Instrument.prototype.markPriceE4 = 0;
        Instrument.prototype.nextFundingTime = "";
        Instrument.prototype.openInterest = 0;
        Instrument.prototype.openValueE8 = 0;
        Instrument.prototype.predictedFundingRateE6 = 0;
        Instrument.prototype.prevPrice1hE4 = 0;
        Instrument.prototype.prevPrice24hE4 = 0;
        Instrument.prototype.price1hPcntE6 = 0;
        Instrument.prototype.price24hPcntE6 = 0;
        Instrument.prototype.symbol = 0;
        Instrument.prototype.totalTurnoverE8 = 0;
        Instrument.prototype.totalVolume = 0;
        Instrument.prototype.turnover24hE8 = 0;
        Instrument.prototype.updatedAt = "";
        Instrument.prototype.volume24h = 0;

        Instrument.create = function create(properties) {
            return new Instrument(properties);
        };

        Instrument.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(0).int32(message.id);
            if (message.crossSeq != null && Object.hasOwnProperty.call(message, "crossSeq"))
                writer.uint32(8).int64(message.crossSeq);
            if (message.countdownHour != null && Object.hasOwnProperty.call(message, "countdownHour"))
                writer.uint32(17).double(message.countdownHour);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(26).string(message.createdAt);
            if (message.fundingRateE6 != null && Object.hasOwnProperty.call(message, "fundingRateE6"))
                writer.uint32(32).int32(message.fundingRateE6);
            if (message.highPrice24hE4 != null && Object.hasOwnProperty.call(message, "highPrice24hE4"))
                writer.uint32(41).double(message.highPrice24hE4);
            if (message.indexPriceE4 != null && Object.hasOwnProperty.call(message, "indexPriceE4"))
                writer.uint32(49).double(message.indexPriceE4);
            if (message.lastTickDirection != null && Object.hasOwnProperty.call(message, "lastTickDirection"))
                writer.uint32(56).int32(message.lastTickDirection);
            if (message.lowPrice24hE4 != null && Object.hasOwnProperty.call(message, "lowPrice24hE4"))
                writer.uint32(65).double(message.lowPrice24hE4);
            if (message.markPriceE4 != null && Object.hasOwnProperty.call(message, "markPriceE4"))
                writer.uint32(73).double(message.markPriceE4);
            if (message.nextFundingTime != null && Object.hasOwnProperty.call(message, "nextFundingTime"))
                writer.uint32(82).string(message.nextFundingTime);
            if (message.openInterest != null && Object.hasOwnProperty.call(message, "openInterest"))
                writer.uint32(89).double(message.openInterest);
            if (message.openValueE8 != null && Object.hasOwnProperty.call(message, "openValueE8"))
                writer.uint32(97).double(message.openValueE8);
            if (message.predictedFundingRateE6 != null && Object.hasOwnProperty.call(message, "predictedFundingRateE6"))
                writer.uint32(104).int32(message.predictedFundingRateE6);
            if (message.prevPrice1hE4 != null && Object.hasOwnProperty.call(message, "prevPrice1hE4"))
                writer.uint32(113).double(message.prevPrice1hE4);
            if (message.prevPrice24hE4 != null && Object.hasOwnProperty.call(message, "prevPrice24hE4"))
                writer.uint32(121).double(message.prevPrice24hE4);
            if (message.price1hPcntE6 != null && Object.hasOwnProperty.call(message, "price1hPcntE6"))
                writer.uint32(128).int32(message.price1hPcntE6);
            if (message.price24hPcntE6 != null && Object.hasOwnProperty.call(message, "price24hPcntE6"))
                writer.uint32(136).int32(message.price24hPcntE6);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(144).int32(message.symbol);
            if (message.totalTurnoverE8 != null && Object.hasOwnProperty.call(message, "totalTurnoverE8"))
                writer.uint32(153).double(message.totalTurnoverE8);
            if (message.totalVolume != null && Object.hasOwnProperty.call(message, "totalVolume"))
                writer.uint32(161).double(message.totalVolume);
            if (message.turnover24hE8 != null && Object.hasOwnProperty.call(message, "turnover24hE8"))
                writer.uint32(169).double(message.turnover24hE8);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(178).string(message.updatedAt);
            if (message.volume24h != null && Object.hasOwnProperty.call(message, "volume24h"))
                writer.uint32(185).double(message.volume24h);
            return writer;
        };

        Instrument.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        Instrument.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IndexQuote.Instrument();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.id = reader.int32();
                    break;
                case 1:
                    message.crossSeq = reader.int64();
                    break;
                case 2:
                    message.countdownHour = reader.double();
                    break;
                case 3:
                    message.createdAt = reader.string();
                    break;
                case 4:
                    message.fundingRateE6 = reader.int32();
                    break;
                case 5:
                    message.highPrice24hE4 = reader.double();
                    break;
                case 6:
                    message.indexPriceE4 = reader.double();
                    break;
                case 7:
                    message.lastTickDirection = reader.int32();
                    break;
                case 8:
                    message.lowPrice24hE4 = reader.double();
                    break;
                case 9:
                    message.markPriceE4 = reader.double();
                    break;
                case 10:
                    message.nextFundingTime = reader.string();
                    break;
                case 11:
                    message.openInterest = reader.double();
                    break;
                case 12:
                    message.openValueE8 = reader.double();
                    break;
                case 13:
                    message.predictedFundingRateE6 = reader.int32();
                    break;
                case 14:
                    message.prevPrice1hE4 = reader.double();
                    break;
                case 15:
                    message.prevPrice24hE4 = reader.double();
                    break;
                case 16:
                    message.price1hPcntE6 = reader.int32();
                    break;
                case 17:
                    message.price24hPcntE6 = reader.int32();
                    break;
                case 18:
                    message.symbol = reader.int32();
                    break;
                case 19:
                    message.totalTurnoverE8 = reader.double();
                    break;
                case 20:
                    message.totalVolume = reader.double();
                    break;
                case 21:
                    message.turnover24hE8 = reader.double();
                    break;
                case 22:
                    message.updatedAt = reader.string();
                    break;
                case 23:
                    message.volume24h = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Instrument.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Instrument.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.crossSeq != null && message.hasOwnProperty("crossSeq"))
                if (!$util.isInteger(message.crossSeq) && !(message.crossSeq && $util.isInteger(message.crossSeq.low) && $util.isInteger(message.crossSeq.high)))
                    return "crossSeq: integer|Long expected";
            if (message.countdownHour != null && message.hasOwnProperty("countdownHour"))
                if (typeof message.countdownHour !== "number")
                    return "countdownHour: number expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.fundingRateE6 != null && message.hasOwnProperty("fundingRateE6"))
                if (!$util.isInteger(message.fundingRateE6))
                    return "fundingRateE6: integer expected";
            if (message.highPrice24hE4 != null && message.hasOwnProperty("highPrice24hE4"))
                if (typeof message.highPrice24hE4 !== "number")
                    return "highPrice24hE4: number expected";
            if (message.indexPriceE4 != null && message.hasOwnProperty("indexPriceE4"))
                if (typeof message.indexPriceE4 !== "number")
                    return "indexPriceE4: number expected";
            if (message.lastTickDirection != null && message.hasOwnProperty("lastTickDirection"))
                switch (message.lastTickDirection) {
                default:
                    return "lastTickDirection: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.lowPrice24hE4 != null && message.hasOwnProperty("lowPrice24hE4"))
                if (typeof message.lowPrice24hE4 !== "number")
                    return "lowPrice24hE4: number expected";
            if (message.markPriceE4 != null && message.hasOwnProperty("markPriceE4"))
                if (typeof message.markPriceE4 !== "number")
                    return "markPriceE4: number expected";
            if (message.nextFundingTime != null && message.hasOwnProperty("nextFundingTime"))
                if (!$util.isString(message.nextFundingTime))
                    return "nextFundingTime: string expected";
            if (message.openInterest != null && message.hasOwnProperty("openInterest"))
                if (typeof message.openInterest !== "number")
                    return "openInterest: number expected";
            if (message.openValueE8 != null && message.hasOwnProperty("openValueE8"))
                if (typeof message.openValueE8 !== "number")
                    return "openValueE8: number expected";
            if (message.predictedFundingRateE6 != null && message.hasOwnProperty("predictedFundingRateE6"))
                if (!$util.isInteger(message.predictedFundingRateE6))
                    return "predictedFundingRateE6: integer expected";
            if (message.prevPrice1hE4 != null && message.hasOwnProperty("prevPrice1hE4"))
                if (typeof message.prevPrice1hE4 !== "number")
                    return "prevPrice1hE4: number expected";
            if (message.prevPrice24hE4 != null && message.hasOwnProperty("prevPrice24hE4"))
                if (typeof message.prevPrice24hE4 !== "number")
                    return "prevPrice24hE4: number expected";
            if (message.price1hPcntE6 != null && message.hasOwnProperty("price1hPcntE6"))
                if (!$util.isInteger(message.price1hPcntE6))
                    return "price1hPcntE6: integer expected";
            if (message.price24hPcntE6 != null && message.hasOwnProperty("price24hPcntE6"))
                if (!$util.isInteger(message.price24hPcntE6))
                    return "price24hPcntE6: integer expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                switch (message.symbol) {
                default:
                    return "symbol: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.totalTurnoverE8 != null && message.hasOwnProperty("totalTurnoverE8"))
                if (typeof message.totalTurnoverE8 !== "number")
                    return "totalTurnoverE8: number expected";
            if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                if (typeof message.totalVolume !== "number")
                    return "totalVolume: number expected";
            if (message.turnover24hE8 != null && message.hasOwnProperty("turnover24hE8"))
                if (typeof message.turnover24hE8 !== "number")
                    return "turnover24hE8: number expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.volume24h != null && message.hasOwnProperty("volume24h"))
                if (typeof message.volume24h !== "number")
                    return "volume24h: number expected";
            return null;
        };

        Instrument.fromObject = function fromObject(object) {
            if (object instanceof $root.IndexQuote.Instrument)
                return object;
            var message = new $root.IndexQuote.Instrument();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.crossSeq != null)
                if ($util.Long)
                    (message.crossSeq = $util.Long.fromValue(object.crossSeq)).unsigned = false;
                else if (typeof object.crossSeq === "string")
                    message.crossSeq = parseInt(object.crossSeq, 10);
                else if (typeof object.crossSeq === "number")
                    message.crossSeq = object.crossSeq;
                else if (typeof object.crossSeq === "object")
                    message.crossSeq = new $util.LongBits(object.crossSeq.low >>> 0, object.crossSeq.high >>> 0).toNumber();
            if (object.countdownHour != null)
                message.countdownHour = Number(object.countdownHour);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.fundingRateE6 != null)
                message.fundingRateE6 = object.fundingRateE6 | 0;
            if (object.highPrice24hE4 != null)
                message.highPrice24hE4 = Number(object.highPrice24hE4);
            if (object.indexPriceE4 != null)
                message.indexPriceE4 = Number(object.indexPriceE4);
            switch (object.lastTickDirection) {
            case "ZeroMinusTick":
            case 0:
                message.lastTickDirection = 0;
                break;
            case "ZeroPlusTick":
            case 1:
                message.lastTickDirection = 1;
                break;
            }
            if (object.lowPrice24hE4 != null)
                message.lowPrice24hE4 = Number(object.lowPrice24hE4);
            if (object.markPriceE4 != null)
                message.markPriceE4 = Number(object.markPriceE4);
            if (object.nextFundingTime != null)
                message.nextFundingTime = String(object.nextFundingTime);
            if (object.openInterest != null)
                message.openInterest = Number(object.openInterest);
            if (object.openValueE8 != null)
                message.openValueE8 = Number(object.openValueE8);
            if (object.predictedFundingRateE6 != null)
                message.predictedFundingRateE6 = object.predictedFundingRateE6 | 0;
            if (object.prevPrice1hE4 != null)
                message.prevPrice1hE4 = Number(object.prevPrice1hE4);
            if (object.prevPrice24hE4 != null)
                message.prevPrice24hE4 = Number(object.prevPrice24hE4);
            if (object.price1hPcntE6 != null)
                message.price1hPcntE6 = object.price1hPcntE6 | 0;
            if (object.price24hPcntE6 != null)
                message.price24hPcntE6 = object.price24hPcntE6 | 0;
            switch (object.symbol) {
            case "BTCUSD":
            case 0:
                message.symbol = 0;
                break;
            case "ETHUSD":
            case 1:
                message.symbol = 1;
                break;
            }
            if (object.totalTurnoverE8 != null)
                message.totalTurnoverE8 = Number(object.totalTurnoverE8);
            if (object.totalVolume != null)
                message.totalVolume = Number(object.totalVolume);
            if (object.turnover24hE8 != null)
                message.turnover24hE8 = Number(object.turnover24hE8);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.volume24h != null)
                message.volume24h = Number(object.volume24h);
            return message;
        };

        Instrument.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.crossSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.crossSeq = options.longs === String ? "0" : 0;
                object.countdownHour = 0;
                object.createdAt = "";
                object.fundingRateE6 = 0;
                object.highPrice24hE4 = 0;
                object.indexPriceE4 = 0;
                object.lastTickDirection = options.enums === String ? "ZeroMinusTick" : 0;
                object.lowPrice24hE4 = 0;
                object.markPriceE4 = 0;
                object.nextFundingTime = "";
                object.openInterest = 0;
                object.openValueE8 = 0;
                object.predictedFundingRateE6 = 0;
                object.prevPrice1hE4 = 0;
                object.prevPrice24hE4 = 0;
                object.price1hPcntE6 = 0;
                object.price24hPcntE6 = 0;
                object.symbol = options.enums === String ? "BTCUSD" : 0;
                object.totalTurnoverE8 = 0;
                object.totalVolume = 0;
                object.turnover24hE8 = 0;
                object.updatedAt = "";
                object.volume24h = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.crossSeq != null && message.hasOwnProperty("crossSeq"))
                if (typeof message.crossSeq === "number")
                    object.crossSeq = options.longs === String ? String(message.crossSeq) : message.crossSeq;
                else
                    object.crossSeq = options.longs === String ? $util.Long.prototype.toString.call(message.crossSeq) : options.longs === Number ? new $util.LongBits(message.crossSeq.low >>> 0, message.crossSeq.high >>> 0).toNumber() : message.crossSeq;
            if (message.countdownHour != null && message.hasOwnProperty("countdownHour"))
                object.countdownHour = options.json && !isFinite(message.countdownHour) ? String(message.countdownHour) : message.countdownHour;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.fundingRateE6 != null && message.hasOwnProperty("fundingRateE6"))
                object.fundingRateE6 = message.fundingRateE6;
            if (message.highPrice24hE4 != null && message.hasOwnProperty("highPrice24hE4"))
                object.highPrice24hE4 = options.json && !isFinite(message.highPrice24hE4) ? String(message.highPrice24hE4) : message.highPrice24hE4;
            if (message.indexPriceE4 != null && message.hasOwnProperty("indexPriceE4"))
                object.indexPriceE4 = options.json && !isFinite(message.indexPriceE4) ? String(message.indexPriceE4) : message.indexPriceE4;
            if (message.lastTickDirection != null && message.hasOwnProperty("lastTickDirection"))
                object.lastTickDirection = options.enums === String ? $root.IndexQuote.TickDirection[message.lastTickDirection] : message.lastTickDirection;
            if (message.lowPrice24hE4 != null && message.hasOwnProperty("lowPrice24hE4"))
                object.lowPrice24hE4 = options.json && !isFinite(message.lowPrice24hE4) ? String(message.lowPrice24hE4) : message.lowPrice24hE4;
            if (message.markPriceE4 != null && message.hasOwnProperty("markPriceE4"))
                object.markPriceE4 = options.json && !isFinite(message.markPriceE4) ? String(message.markPriceE4) : message.markPriceE4;
            if (message.nextFundingTime != null && message.hasOwnProperty("nextFundingTime"))
                object.nextFundingTime = message.nextFundingTime;
            if (message.openInterest != null && message.hasOwnProperty("openInterest"))
                object.openInterest = options.json && !isFinite(message.openInterest) ? String(message.openInterest) : message.openInterest;
            if (message.openValueE8 != null && message.hasOwnProperty("openValueE8"))
                object.openValueE8 = options.json && !isFinite(message.openValueE8) ? String(message.openValueE8) : message.openValueE8;
            if (message.predictedFundingRateE6 != null && message.hasOwnProperty("predictedFundingRateE6"))
                object.predictedFundingRateE6 = message.predictedFundingRateE6;
            if (message.prevPrice1hE4 != null && message.hasOwnProperty("prevPrice1hE4"))
                object.prevPrice1hE4 = options.json && !isFinite(message.prevPrice1hE4) ? String(message.prevPrice1hE4) : message.prevPrice1hE4;
            if (message.prevPrice24hE4 != null && message.hasOwnProperty("prevPrice24hE4"))
                object.prevPrice24hE4 = options.json && !isFinite(message.prevPrice24hE4) ? String(message.prevPrice24hE4) : message.prevPrice24hE4;
            if (message.price1hPcntE6 != null && message.hasOwnProperty("price1hPcntE6"))
                object.price1hPcntE6 = message.price1hPcntE6;
            if (message.price24hPcntE6 != null && message.hasOwnProperty("price24hPcntE6"))
                object.price24hPcntE6 = message.price24hPcntE6;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = options.enums === String ? $root.IndexQuote.Symbol[message.symbol] : message.symbol;
            if (message.totalTurnoverE8 != null && message.hasOwnProperty("totalTurnoverE8"))
                object.totalTurnoverE8 = options.json && !isFinite(message.totalTurnoverE8) ? String(message.totalTurnoverE8) : message.totalTurnoverE8;
            if (message.totalVolume != null && message.hasOwnProperty("totalVolume"))
                object.totalVolume = options.json && !isFinite(message.totalVolume) ? String(message.totalVolume) : message.totalVolume;
            if (message.turnover24hE8 != null && message.hasOwnProperty("turnover24hE8"))
                object.turnover24hE8 = options.json && !isFinite(message.turnover24hE8) ? String(message.turnover24hE8) : message.turnover24hE8;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.volume24h != null && message.hasOwnProperty("volume24h"))
                object.volume24h = options.json && !isFinite(message.volume24h) ? String(message.volume24h) : message.volume24h;
            return object;
        };

        Instrument.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Instrument;
    })();

    return IndexQuote;
})();

$root.Health = (function() {

    function Health(properties) {
        this.args = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Health.prototype.op = "";
    Health.prototype.args = $util.emptyArray;

    Health.create = function create(properties) {
        return new Health(properties);
    };

    Health.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.op != null && Object.hasOwnProperty.call(message, "op"))
            writer.uint32(2).string(message.op);
        if (message.args != null && message.args.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.args.length; ++i)
                writer.uint64(message.args[i]);
            writer.ldelim();
        }
        return writer;
    };

    Health.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    Health.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Health();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.op = reader.string();
                break;
            case 1:
                if (!(message.args && message.args.length))
                    message.args = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.args.push(reader.uint64());
                } else
                    message.args.push(reader.uint64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Health.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    Health.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.op != null && message.hasOwnProperty("op"))
            if (!$util.isString(message.op))
                return "op: string expected";
        if (message.args != null && message.hasOwnProperty("args")) {
            if (!Array.isArray(message.args))
                return "args: array expected";
            for (var i = 0; i < message.args.length; ++i)
                if (!$util.isInteger(message.args[i]) && !(message.args[i] && $util.isInteger(message.args[i].low) && $util.isInteger(message.args[i].high)))
                    return "args: integer|Long[] expected";
        }
        return null;
    };

    Health.fromObject = function fromObject(object) {
        if (object instanceof $root.Health)
            return object;
        var message = new $root.Health();
        if (object.op != null)
            message.op = String(object.op);
        if (object.args) {
            if (!Array.isArray(object.args))
                throw TypeError(".Health.args: array expected");
            message.args = [];
            for (var i = 0; i < object.args.length; ++i)
                if ($util.Long)
                    (message.args[i] = $util.Long.fromValue(object.args[i])).unsigned = true;
                else if (typeof object.args[i] === "string")
                    message.args[i] = parseInt(object.args[i], 10);
                else if (typeof object.args[i] === "number")
                    message.args[i] = object.args[i];
                else if (typeof object.args[i] === "object")
                    message.args[i] = new $util.LongBits(object.args[i].low >>> 0, object.args[i].high >>> 0).toNumber(true);
        }
        return message;
    };

    Health.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.args = [];
        if (options.defaults)
            object.op = "";
        if (message.op != null && message.hasOwnProperty("op"))
            object.op = message.op;
        if (message.args && message.args.length) {
            object.args = [];
            for (var j = 0; j < message.args.length; ++j)
                if (typeof message.args[j] === "number")
                    object.args[j] = options.longs === String ? String(message.args[j]) : message.args[j];
                else
                    object.args[j] = options.longs === String ? $util.Long.prototype.toString.call(message.args[j]) : options.longs === Number ? new $util.LongBits(message.args[j].low >>> 0, message.args[j].high >>> 0).toNumber(true) : message.args[j];
        }
        return object;
    };

    Health.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Health;
})();

module.exports = $root;
