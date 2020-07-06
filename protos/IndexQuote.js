/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PBIndexQuote = (function() {

    /**
     * Properties of a PBIndexQuote.
     * @exports IPBIndexQuote
     * @interface IPBIndexQuote
     * @property {number|null} [crossSeq] PBIndexQuote crossSeq
     * @property {number|Long|null} [timestampE6] PBIndexQuote timestampE6
     * @property {string|null} [topic] PBIndexQuote topic
     * @property {string|null} [type] PBIndexQuote type
     * @property {Array.<PBIndexQuote.IOrderbook>|null} [orderbook] PBIndexQuote orderbook
     * @property {Array.<PBIndexQuote.IRecentTrade>|null} [recentTrade] PBIndexQuote recentTrade
     */

    /**
     * Constructs a new PBIndexQuote.
     * @exports PBIndexQuote
     * @classdesc Represents a PBIndexQuote.
     * @implements IPBIndexQuote
     * @constructor
     * @param {IPBIndexQuote=} [properties] Properties to set
     */
    function PBIndexQuote(properties) {
        this.orderbook = [];
        this.recentTrade = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PBIndexQuote crossSeq.
     * @member {number} crossSeq
     * @memberof PBIndexQuote
     * @instance
     */
    PBIndexQuote.prototype.crossSeq = 0;

    /**
     * PBIndexQuote timestampE6.
     * @member {number|Long} timestampE6
     * @memberof PBIndexQuote
     * @instance
     */
    PBIndexQuote.prototype.timestampE6 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PBIndexQuote topic.
     * @member {string} topic
     * @memberof PBIndexQuote
     * @instance
     */
    PBIndexQuote.prototype.topic = "";

    /**
     * PBIndexQuote type.
     * @member {string} type
     * @memberof PBIndexQuote
     * @instance
     */
    PBIndexQuote.prototype.type = "";

    /**
     * PBIndexQuote orderbook.
     * @member {Array.<PBIndexQuote.IOrderbook>} orderbook
     * @memberof PBIndexQuote
     * @instance
     */
    PBIndexQuote.prototype.orderbook = $util.emptyArray;

    /**
     * PBIndexQuote recentTrade.
     * @member {Array.<PBIndexQuote.IRecentTrade>} recentTrade
     * @memberof PBIndexQuote
     * @instance
     */
    PBIndexQuote.prototype.recentTrade = $util.emptyArray;

    /**
     * Creates a new PBIndexQuote instance using the specified properties.
     * @function create
     * @memberof PBIndexQuote
     * @static
     * @param {IPBIndexQuote=} [properties] Properties to set
     * @returns {PBIndexQuote} PBIndexQuote instance
     */
    PBIndexQuote.create = function create(properties) {
        return new PBIndexQuote(properties);
    };

    /**
     * Encodes the specified PBIndexQuote message. Does not implicitly {@link PBIndexQuote.verify|verify} messages.
     * @function encode
     * @memberof PBIndexQuote
     * @static
     * @param {IPBIndexQuote} message PBIndexQuote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PBIndexQuote.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.crossSeq != null && Object.hasOwnProperty.call(message, "crossSeq"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.crossSeq);
        if (message.timestampE6 != null && Object.hasOwnProperty.call(message, "timestampE6"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestampE6);
        if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
        if (message.orderbook != null && message.orderbook.length)
            for (var i = 0; i < message.orderbook.length; ++i)
                $root.PBIndexQuote.Orderbook.encode(message.orderbook[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.recentTrade != null && message.recentTrade.length)
            for (var i = 0; i < message.recentTrade.length; ++i)
                $root.PBIndexQuote.RecentTrade.encode(message.recentTrade[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PBIndexQuote message, length delimited. Does not implicitly {@link PBIndexQuote.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PBIndexQuote
     * @static
     * @param {IPBIndexQuote} message PBIndexQuote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PBIndexQuote.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PBIndexQuote message from the specified reader or buffer.
     * @function decode
     * @memberof PBIndexQuote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PBIndexQuote} PBIndexQuote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PBIndexQuote.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PBIndexQuote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.crossSeq = reader.int32();
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
                message.orderbook.push($root.PBIndexQuote.Orderbook.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.recentTrade && message.recentTrade.length))
                    message.recentTrade = [];
                message.recentTrade.push($root.PBIndexQuote.RecentTrade.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PBIndexQuote message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PBIndexQuote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PBIndexQuote} PBIndexQuote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PBIndexQuote.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PBIndexQuote message.
     * @function verify
     * @memberof PBIndexQuote
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PBIndexQuote.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.crossSeq != null && message.hasOwnProperty("crossSeq"))
            if (!$util.isInteger(message.crossSeq))
                return "crossSeq: integer expected";
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
                var error = $root.PBIndexQuote.Orderbook.verify(message.orderbook[i]);
                if (error)
                    return "orderbook." + error;
            }
        }
        if (message.recentTrade != null && message.hasOwnProperty("recentTrade")) {
            if (!Array.isArray(message.recentTrade))
                return "recentTrade: array expected";
            for (var i = 0; i < message.recentTrade.length; ++i) {
                var error = $root.PBIndexQuote.RecentTrade.verify(message.recentTrade[i]);
                if (error)
                    return "recentTrade." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PBIndexQuote message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PBIndexQuote
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PBIndexQuote} PBIndexQuote
     */
    PBIndexQuote.fromObject = function fromObject(object) {
        if (object instanceof $root.PBIndexQuote)
            return object;
        var message = new $root.PBIndexQuote();
        if (object.crossSeq != null)
            message.crossSeq = object.crossSeq | 0;
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
                throw TypeError(".PBIndexQuote.orderbook: array expected");
            message.orderbook = [];
            for (var i = 0; i < object.orderbook.length; ++i) {
                if (typeof object.orderbook[i] !== "object")
                    throw TypeError(".PBIndexQuote.orderbook: object expected");
                message.orderbook[i] = $root.PBIndexQuote.Orderbook.fromObject(object.orderbook[i]);
            }
        }
        if (object.recentTrade) {
            if (!Array.isArray(object.recentTrade))
                throw TypeError(".PBIndexQuote.recentTrade: array expected");
            message.recentTrade = [];
            for (var i = 0; i < object.recentTrade.length; ++i) {
                if (typeof object.recentTrade[i] !== "object")
                    throw TypeError(".PBIndexQuote.recentTrade: object expected");
                message.recentTrade[i] = $root.PBIndexQuote.RecentTrade.fromObject(object.recentTrade[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PBIndexQuote message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PBIndexQuote
     * @static
     * @param {PBIndexQuote} message PBIndexQuote
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PBIndexQuote.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.orderbook = [];
            object.recentTrade = [];
        }
        if (options.defaults) {
            object.crossSeq = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestampE6 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestampE6 = options.longs === String ? "0" : 0;
            object.topic = "";
            object.type = "";
        }
        if (message.crossSeq != null && message.hasOwnProperty("crossSeq"))
            object.crossSeq = message.crossSeq;
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
                object.orderbook[j] = $root.PBIndexQuote.Orderbook.toObject(message.orderbook[j], options);
        }
        if (message.recentTrade && message.recentTrade.length) {
            object.recentTrade = [];
            for (var j = 0; j < message.recentTrade.length; ++j)
                object.recentTrade[j] = $root.PBIndexQuote.RecentTrade.toObject(message.recentTrade[j], options);
        }
        return object;
    };

    /**
     * Converts this PBIndexQuote to JSON.
     * @function toJSON
     * @memberof PBIndexQuote
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PBIndexQuote.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Side enum.
     * @name PBIndexQuote.Side
     * @enum {number}
     * @property {number} Buy=0 Buy value
     * @property {number} Sell=1 Sell value
     */
    PBIndexQuote.Side = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Buy"] = 0;
        values[valuesById[1] = "Sell"] = 1;
        return values;
    })();

    /**
     * Symbol enum.
     * @name PBIndexQuote.Symbol
     * @enum {number}
     * @property {number} BTCUSD=0 BTCUSD value
     * @property {number} ETHUSD=1 ETHUSD value
     */
    PBIndexQuote.Symbol = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BTCUSD"] = 0;
        values[valuesById[1] = "ETHUSD"] = 1;
        return values;
    })();

    /**
     * TickDirection enum.
     * @name PBIndexQuote.TickDirection
     * @enum {number}
     * @property {number} ZeroMinusTick=0 ZeroMinusTick value
     * @property {number} ZeroPlusTick=1 ZeroPlusTick value
     */
    PBIndexQuote.TickDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ZeroMinusTick"] = 0;
        values[valuesById[1] = "ZeroPlusTick"] = 1;
        return values;
    })();

    PBIndexQuote.Orderbook = (function() {

        /**
         * Properties of an Orderbook.
         * @memberof PBIndexQuote
         * @interface IOrderbook
         * @property {number|null} [id] Orderbook id
         * @property {number|null} [price] Orderbook price
         * @property {PBIndexQuote.Side|null} [side] Orderbook side
         * @property {number|null} [size] Orderbook size
         * @property {PBIndexQuote.Symbol|null} [symbol] Orderbook symbol
         */

        /**
         * Constructs a new Orderbook.
         * @memberof PBIndexQuote
         * @classdesc Represents an Orderbook.
         * @implements IOrderbook
         * @constructor
         * @param {PBIndexQuote.IOrderbook=} [properties] Properties to set
         */
        function Orderbook(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Orderbook id.
         * @member {number} id
         * @memberof PBIndexQuote.Orderbook
         * @instance
         */
        Orderbook.prototype.id = 0;

        /**
         * Orderbook price.
         * @member {number} price
         * @memberof PBIndexQuote.Orderbook
         * @instance
         */
        Orderbook.prototype.price = 0;

        /**
         * Orderbook side.
         * @member {PBIndexQuote.Side} side
         * @memberof PBIndexQuote.Orderbook
         * @instance
         */
        Orderbook.prototype.side = 0;

        /**
         * Orderbook size.
         * @member {number} size
         * @memberof PBIndexQuote.Orderbook
         * @instance
         */
        Orderbook.prototype.size = 0;

        /**
         * Orderbook symbol.
         * @member {PBIndexQuote.Symbol} symbol
         * @memberof PBIndexQuote.Orderbook
         * @instance
         */
        Orderbook.prototype.symbol = 0;

        /**
         * Creates a new Orderbook instance using the specified properties.
         * @function create
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {PBIndexQuote.IOrderbook=} [properties] Properties to set
         * @returns {PBIndexQuote.Orderbook} Orderbook instance
         */
        Orderbook.create = function create(properties) {
            return new Orderbook(properties);
        };

        /**
         * Encodes the specified Orderbook message. Does not implicitly {@link PBIndexQuote.Orderbook.verify|verify} messages.
         * @function encode
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {PBIndexQuote.IOrderbook} message Orderbook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Orderbook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.price);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.side);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.size);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.symbol);
            return writer;
        };

        /**
         * Encodes the specified Orderbook message, length delimited. Does not implicitly {@link PBIndexQuote.Orderbook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {PBIndexQuote.IOrderbook} message Orderbook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Orderbook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Orderbook message from the specified reader or buffer.
         * @function decode
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PBIndexQuote.Orderbook} Orderbook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Orderbook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PBIndexQuote.Orderbook();
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

        /**
         * Decodes an Orderbook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PBIndexQuote.Orderbook} Orderbook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Orderbook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Orderbook message.
         * @function verify
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates an Orderbook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PBIndexQuote.Orderbook} Orderbook
         */
        Orderbook.fromObject = function fromObject(object) {
            if (object instanceof $root.PBIndexQuote.Orderbook)
                return object;
            var message = new $root.PBIndexQuote.Orderbook();
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

        /**
         * Creates a plain object from an Orderbook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PBIndexQuote.Orderbook
         * @static
         * @param {PBIndexQuote.Orderbook} message Orderbook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
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
                object.side = options.enums === String ? $root.PBIndexQuote.Side[message.side] : message.side;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = options.json && !isFinite(message.size) ? String(message.size) : message.size;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = options.enums === String ? $root.PBIndexQuote.Symbol[message.symbol] : message.symbol;
            return object;
        };

        /**
         * Converts this Orderbook to JSON.
         * @function toJSON
         * @memberof PBIndexQuote.Orderbook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Orderbook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Orderbook;
    })();

    PBIndexQuote.RecentTrade = (function() {

        /**
         * Properties of a RecentTrade.
         * @memberof PBIndexQuote
         * @interface IRecentTrade
         * @property {string|null} [execID] RecentTrade execID
         * @property {string|null} [execPrice] RecentTrade execPrice
         * @property {number|null} [qty] RecentTrade qty
         * @property {string|null} [execTime] RecentTrade execTime
         * @property {PBIndexQuote.Side|null} [side] RecentTrade side
         * @property {PBIndexQuote.Symbol|null} [symbol] RecentTrade symbol
         * @property {PBIndexQuote.TickDirection|null} [tickDirection] RecentTrade tickDirection
         * @property {number|null} [transactTimeE6] RecentTrade transactTimeE6
         */

        /**
         * Constructs a new RecentTrade.
         * @memberof PBIndexQuote
         * @classdesc Represents a RecentTrade.
         * @implements IRecentTrade
         * @constructor
         * @param {PBIndexQuote.IRecentTrade=} [properties] Properties to set
         */
        function RecentTrade(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecentTrade execID.
         * @member {string} execID
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.execID = "";

        /**
         * RecentTrade execPrice.
         * @member {string} execPrice
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.execPrice = "";

        /**
         * RecentTrade qty.
         * @member {number} qty
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.qty = 0;

        /**
         * RecentTrade execTime.
         * @member {string} execTime
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.execTime = "";

        /**
         * RecentTrade side.
         * @member {PBIndexQuote.Side} side
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.side = 0;

        /**
         * RecentTrade symbol.
         * @member {PBIndexQuote.Symbol} symbol
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.symbol = 0;

        /**
         * RecentTrade tickDirection.
         * @member {PBIndexQuote.TickDirection} tickDirection
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.tickDirection = 0;

        /**
         * RecentTrade transactTimeE6.
         * @member {number} transactTimeE6
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         */
        RecentTrade.prototype.transactTimeE6 = 0;

        /**
         * Creates a new RecentTrade instance using the specified properties.
         * @function create
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {PBIndexQuote.IRecentTrade=} [properties] Properties to set
         * @returns {PBIndexQuote.RecentTrade} RecentTrade instance
         */
        RecentTrade.create = function create(properties) {
            return new RecentTrade(properties);
        };

        /**
         * Encodes the specified RecentTrade message. Does not implicitly {@link PBIndexQuote.RecentTrade.verify|verify} messages.
         * @function encode
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {PBIndexQuote.IRecentTrade} message RecentTrade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecentTrade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.execID != null && Object.hasOwnProperty.call(message, "execID"))
                writer.uint32(/* id 0, wireType 2 =*/2).string(message.execID);
            if (message.execPrice != null && Object.hasOwnProperty.call(message, "execPrice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.execPrice);
            if (message.qty != null && Object.hasOwnProperty.call(message, "qty"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.qty);
            if (message.execTime != null && Object.hasOwnProperty.call(message, "execTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.execTime);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.side);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.symbol);
            if (message.tickDirection != null && Object.hasOwnProperty.call(message, "tickDirection"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.tickDirection);
            if (message.transactTimeE6 != null && Object.hasOwnProperty.call(message, "transactTimeE6"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.transactTimeE6);
            return writer;
        };

        /**
         * Encodes the specified RecentTrade message, length delimited. Does not implicitly {@link PBIndexQuote.RecentTrade.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {PBIndexQuote.IRecentTrade} message RecentTrade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecentTrade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecentTrade message from the specified reader or buffer.
         * @function decode
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PBIndexQuote.RecentTrade} RecentTrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecentTrade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PBIndexQuote.RecentTrade();
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

        /**
         * Decodes a RecentTrade message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PBIndexQuote.RecentTrade} RecentTrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecentTrade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecentTrade message.
         * @function verify
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
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

        /**
         * Creates a RecentTrade message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PBIndexQuote.RecentTrade} RecentTrade
         */
        RecentTrade.fromObject = function fromObject(object) {
            if (object instanceof $root.PBIndexQuote.RecentTrade)
                return object;
            var message = new $root.PBIndexQuote.RecentTrade();
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

        /**
         * Creates a plain object from a RecentTrade message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PBIndexQuote.RecentTrade
         * @static
         * @param {PBIndexQuote.RecentTrade} message RecentTrade
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
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
                object.side = options.enums === String ? $root.PBIndexQuote.Side[message.side] : message.side;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = options.enums === String ? $root.PBIndexQuote.Symbol[message.symbol] : message.symbol;
            if (message.tickDirection != null && message.hasOwnProperty("tickDirection"))
                object.tickDirection = options.enums === String ? $root.PBIndexQuote.TickDirection[message.tickDirection] : message.tickDirection;
            if (message.transactTimeE6 != null && message.hasOwnProperty("transactTimeE6"))
                object.transactTimeE6 = message.transactTimeE6;
            return object;
        };

        /**
         * Converts this RecentTrade to JSON.
         * @function toJSON
         * @memberof PBIndexQuote.RecentTrade
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecentTrade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RecentTrade;
    })();

    PBIndexQuote.instrument = (function() {

        /**
         * Properties of an instrument.
         * @memberof PBIndexQuote
         * @interface Iinstrument
         */

        /**
         * Constructs a new instrument.
         * @memberof PBIndexQuote
         * @classdesc Represents an instrument.
         * @implements Iinstrument
         * @constructor
         * @param {PBIndexQuote.Iinstrument=} [properties] Properties to set
         */
        function instrument(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new instrument instance using the specified properties.
         * @function create
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {PBIndexQuote.Iinstrument=} [properties] Properties to set
         * @returns {PBIndexQuote.instrument} instrument instance
         */
        instrument.create = function create(properties) {
            return new instrument(properties);
        };

        /**
         * Encodes the specified instrument message. Does not implicitly {@link PBIndexQuote.instrument.verify|verify} messages.
         * @function encode
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {PBIndexQuote.Iinstrument} message instrument message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        instrument.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified instrument message, length delimited. Does not implicitly {@link PBIndexQuote.instrument.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {PBIndexQuote.Iinstrument} message instrument message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        instrument.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an instrument message from the specified reader or buffer.
         * @function decode
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PBIndexQuote.instrument} instrument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        instrument.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PBIndexQuote.instrument();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an instrument message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PBIndexQuote.instrument} instrument
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        instrument.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an instrument message.
         * @function verify
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        instrument.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an instrument message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PBIndexQuote.instrument} instrument
         */
        instrument.fromObject = function fromObject(object) {
            if (object instanceof $root.PBIndexQuote.instrument)
                return object;
            return new $root.PBIndexQuote.instrument();
        };

        /**
         * Creates a plain object from an instrument message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PBIndexQuote.instrument
         * @static
         * @param {PBIndexQuote.instrument} message instrument
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        instrument.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this instrument to JSON.
         * @function toJSON
         * @memberof PBIndexQuote.instrument
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        instrument.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return instrument;
    })();

    return PBIndexQuote;
})();

module.exports = $root;
