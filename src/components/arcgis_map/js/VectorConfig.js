export const VectorConfig = {};

VectorConfig.layerstyle = {
	"sources": {
		"esri": {
			"type": "vector",
			"url": mapconfig.Vector_url
		}
	},
	"sprite": mapconfig.Vector_url + "//resources/sprites/sprite",
	"layers": [{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"paint": {
				"line-width": 12.6667,
				"line-color": "#E8EEF3"
			},
			"id": "底色/底区融合/2",
			"source": "esri",
			"source-layer": "底区融合",
			"type": "line",
			"minzoom": 7.21
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"paint": {
				"line-width": 6.66667,
				"line-color": "#A1BAD0"
			},
			"id": "底色/底区融合/1",
			"source": "esri",
			"source-layer": "底区融合",
			"type": "line",
			"minzoom": 7.21
		},
		{
			"layout": {},
			"layerCategory": "底色.背景",
			"paint": {
				"fill-color": "#F9F9F8"
			},
			"attributes": [{
					"layout": {},
					"layerCategory": "底色.背景",
					"paint": {
						"fill-color": "#F9F9F8"
					},
					"attributes": [{
							"layout": {},
							"layerCategory": "底色.背景",
							"paint": {
								"fill-color": "#F9F9F8"
							},
							"attributes": [{
									"layout": {},
									"paint": {
										"fill-color": "#F9F9F8"
									},
									"id": "底色/底区融合/0",
									"source": "esri",
									"source-layer": "底区融合",
									"type": "fill",
									"minzoom": 7.21
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"paint": {
										"line-width": 6.66667,
										"line-color": "#A1BAD0"
									},
									"id": "底色/底区融合/1",
									"source": "esri",
									"source-layer": "底区融合",
									"type": "line",
									"minzoom": 7.21
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"paint": {
										"line-width": 12.6667,
										"line-color": "#E8EEF3"
									},
									"id": "底色/底区融合/2",
									"source": "esri",
									"source-layer": "底区融合",
									"type": "line",
									"minzoom": 7.21
								}
							],
							"id": "底色/底区融合/0",
							"source": "esri",
							"source-layer": "底区融合",
							"type": "fill",
							"minzoom": 7.21
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"paint": {
								"line-width": 6.66667,
								"line-color": "#A1BAD0"
							},
							"id": "底色/底区融合/1",
							"source": "esri",
							"source-layer": "底区融合",
							"type": "line",
							"minzoom": 7.21
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"paint": {
								"line-width": 12.6667,
								"line-color": "#E8EEF3"
							},
							"id": "底色/底区融合/2",
							"source": "esri",
							"source-layer": "底区融合",
							"type": "line",
							"minzoom": 7.21
						}
					],
					"id": "底色/底区融合/0",
					"source": "esri",
					"source-layer": "底区融合",
					"type": "fill",
					"minzoom": 7.21
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-width": 6.66667,
						"line-color": "#A1BAD0"
					},
					"id": "底色/底区融合/1",
					"source": "esri",
					"source-layer": "底区融合",
					"type": "line",
					"minzoom": 7.21
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-width": 12.6667,
						"line-color": "#E8EEF3"
					},
					"id": "底色/底区融合/2",
					"source": "esri",
					"source-layer": "底区融合",
					"type": "line",
					"minzoom": 7.21
				}
			],
			"id": "底色/底区融合/0",
			"source": "esri",
			"source-layer": "底区融合",
			"type": "fill",
			"title": "背景",
			"minzoom": 7.21
		},
		{
			"layout": {},
			"layerCategory": "植被.农林绿地",
			"paint": {
				"fill-color": "#bbd78d"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "植被.农林绿地",
				"paint": {
					"fill-color": "#bbd78d"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "植被.农林绿地",
					"paint": {
						"fill-color": "#D0EAD3"
					},
					"attributes": [{
						"layout": {},
						"layerCategory": "植被.农林绿地",
						"paint": {
							"fill-color": "#D0EAD3"
						},
						"attributes": [{
							"layout": {},
							"paint": {
								"fill-color": "#D0EAD3"
							},
							"id": "植被/ZB_NLLD_A/1",
							"source": "esri",
							"source-layer": "ZB_NLLD_A",
							"type": "fill",
							"minzoom": 14.27
						}],
						"id": "植被/ZB_NLLD_A/1",
						"source": "esri",
						"source-layer": "ZB_NLLD_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "植被/ZB_NLLD_A/1",
					"source": "esri",
					"source-layer": "ZB_NLLD_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "植被/ZB_NLLD_A/1",
				"source": "esri",
				"source-layer": "ZB_NLLD_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "植被/ZB_NLLD_A/1",
			"source": "esri",
			"source-layer": "ZB_NLLD_A",
			"type": "fill",
			"title": "农林绿地",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "植被.露天体育场",
			"paint": {
				"fill-color": "#abce73"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "植被.露天体育场",
				"paint": {
					"fill-color": "#abce73"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "植被.露天体育场",
					"paint": {
						"fill-color": "#D4F7D9"
					},
					"attributes": [{
						"layout": {},
						"layerCategory": "植被.露天体育场",
						"paint": {
							"fill-color": "#D4F7D9"
						},
						"attributes": [{
							"layout": {},
							"paint": {
								"fill-color": "#D4F7D9"
							},
							"id": "植被/JMD_LTTYC_A",
							"source": "esri",
							"source-layer": "JMD_LTTYC_A",
							"type": "fill",
							"minzoom": 14.27
						}],
						"id": "植被/JMD_LTTYC_A",
						"source": "esri",
						"source-layer": "JMD_LTTYC_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "植被/JMD_LTTYC_A",
					"source": "esri",
					"source-layer": "JMD_LTTYC_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "植被/JMD_LTTYC_A",
				"source": "esri",
				"source-layer": "JMD_LTTYC_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "植被/JMD_LTTYC_A",
			"source": "esri",
			"source-layer": "JMD_LTTYC_A",
			"type": "fill",
			"title": "露天体育场",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "植被.城市绿地",
			"paint": {
				"fill-color": "#bbd78d"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "植被.城市绿地",
				"paint": {
					"fill-color": "#9cc558"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "植被.城市绿地",
					"paint": {
						"fill-color": "#D4F7D9"
					},
					"attributes": [{
						"layout": {},
						"layerCategory": "植被.城市绿地",
						"paint": {
							"fill-color": "#D4F7D9"
						},
						"attributes": [{
							"layout": {},
							"paint": {
								"fill-color": "#D4F7D9"
							},
							"id": "植被/ZB_CSLD_A",
							"source": "esri",
							"source-layer": "ZB_CSLD_A",
							"type": "fill",
							"minzoom": 14.27
						}],
						"id": "植被/ZB_CSLD_A",
						"source": "esri",
						"source-layer": "ZB_CSLD_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "植被/ZB_CSLD_A",
					"source": "esri",
					"source-layer": "ZB_CSLD_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "植被/ZB_CSLD_A",
				"source": "esri",
				"source-layer": "ZB_CSLD_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "植被/ZB_CSLD_A",
			"source": "esri",
			"source-layer": "ZB_CSLD_A",
			"type": "fill",
			"title": "城市绿地",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "植被.植被",
			"maxzoom": 14.27,
			"paint": {
				"fill-color": "#bbd78d"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "植被.植被",
				"maxzoom": 14.27,
				"paint": {
					"fill-color": "#8bb841"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "植被.植被",
					"maxzoom": 14.27,
					"paint": {
						"fill-color": "#C0F4C8"
					},
					"attributes": [{
						"layout": {},
						"layerCategory": "植被.植被",
						"maxzoom": 14.27,
						"paint": {
							"fill-color": "#C0F4C8"
						},
						"attributes": [{
							"layout": {},
							"maxzoom": 14.27,
							"paint": {
								"fill-color": "#C0F4C8"
							},
							"id": "植被/植被",
							"source": "esri",
							"source-layer": "植被",
							"type": "fill",
							"minzoom": 7.21
						}],
						"id": "植被/植被",
						"source": "esri",
						"source-layer": "植被",
						"type": "fill",
						"minzoom": 7.21
					}],
					"id": "植被/植被",
					"source": "esri",
					"source-layer": "植被",
					"type": "fill",
					"minzoom": 7.21
				}],
				"id": "植被/植被",
				"source": "esri",
				"source-layer": "植被",
				"type": "fill",
				"minzoom": 7.21
			}],
			"id": "植被/植被",
			"source": "esri",
			"source-layer": "植被",
			"type": "fill",
			"title": "植被",
			"minzoom": 7.21
		},
		{
			"layout": {},
			"layerCategory": "水系.湖泊水库",
			"paint": {
				"fill-color": "#BFD9F2"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "水系.湖泊水库",
				"paint": {
					"fill-color": "#BFD9F2"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "水系.湖泊水库",
					"paint": {
						"fill-color": "#BFD9F2"
					},
					"attributes": [{
						"layout": {},
						"paint": {
							"fill-color": "#BFD9F2"
						},
						"id": "水系/SX_HUPO_A",
						"source": "esri",
						"source-layer": "SX_HUPO_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "水系/SX_HUPO_A",
					"source": "esri",
					"source-layer": "SX_HUPO_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "水系/SX_HUPO_A",
				"source": "esri",
				"source-layer": "SX_HUPO_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "水系/SX_HUPO_A",
			"source": "esri",
			"source-layer": "SX_HUPO_A",
			"type": "fill",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "水系.河流",
			"paint": {
				"fill-outline-color": "#B8E3FC",
				"fill-color": "#CCEBFD"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "水系.河流",
				"paint": {
					"fill-outline-color": "#B8E3FC",
					"fill-color": "#CCEBFD"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "水系.河流",
					"paint": {
						"fill-outline-color": "#B8E3FC",
						"fill-color": "#CCEBFD"
					},
					"attributes": [{
						"layout": {},
						"paint": {
							"fill-outline-color": "#B8E3FC",
							"fill-color": "#CCEBFD"
						},
						"id": "水系/SX_HELIU_A",
						"source": "esri",
						"source-layer": "SX_HELIU_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "水系/SX_HELIU_A",
					"source": "esri",
					"source-layer": "SX_HELIU_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "水系/SX_HELIU_A",
				"source": "esri",
				"source-layer": "SX_HELIU_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "水系/SX_HELIU_A",
			"source": "esri",
			"source-layer": "SX_HELIU_A",
			"type": "fill",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "水系.水库",
			"maxzoom": 14.27,
			"paint": {
				"fill-outline-color": "#C0E2FE",
				"fill-color": "#CBE7FE"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "水系.水库",
				"maxzoom": 14.27,
				"paint": {
					"fill-outline-color": "#C0E2FE",
					"fill-color": "#CBE7FE"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "水系.水库",
					"maxzoom": 14.27,
					"paint": {
						"fill-outline-color": "#C0E2FE",
						"fill-color": "#CBE7FE"
					},
					"attributes": [{
						"layout": {},
						"maxzoom": 14.27,
						"paint": {
							"fill-outline-color": "#C0E2FE",
							"fill-color": "#CBE7FE"
						},
						"id": "水系/水库",
						"source": "esri",
						"source-layer": "水库",
						"type": "fill",
						"minzoom": 9.53
					}],
					"id": "水系/水库",
					"source": "esri",
					"source-layer": "水库",
					"type": "fill",
					"minzoom": 9.53
				}],
				"id": "水系/水库",
				"source": "esri",
				"source-layer": "水库",
				"type": "fill",
				"minzoom": 9.53
			}],
			"id": "水系/水库",
			"source": "esri",
			"source-layer": "水库",
			"type": "fill",
			"minzoom": 9.53
		},
		{
			"layout": {},
			"layerCategory": "水系.湖泊",
			"maxzoom": 14.27,
			"paint": {
				"fill-outline-color": "#B7DAFD",
				"fill-color": "#D8EFFF"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "水系.湖泊",
				"maxzoom": 14.27,
				"paint": {
					"fill-outline-color": "#B7DAFD",
					"fill-color": "#D8EFFF"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "水系.湖泊",
					"maxzoom": 14.27,
					"paint": {
						"fill-outline-color": "#B7DAFD",
						"fill-color": "#D8EFFF"
					},
					"attributes": [{
						"layout": {},
						"maxzoom": 14.27,
						"paint": {
							"fill-outline-color": "#B7DAFD",
							"fill-color": "#D8EFFF"
						},
						"id": "水系/湖泊",
						"source": "esri",
						"source-layer": "湖泊",
						"type": "fill",
						"minzoom": 7.21
					}],
					"id": "水系/湖泊",
					"source": "esri",
					"source-layer": "湖泊",
					"type": "fill",
					"minzoom": 7.21
				}],
				"id": "水系/湖泊",
				"source": "esri",
				"source-layer": "湖泊",
				"type": "fill",
				"minzoom": 7.21
			}],
			"id": "水系/湖泊",
			"source": "esri",
			"source-layer": "湖泊",
			"type": "fill",
			"minzoom": 7.21
		},
		{
			"layout": {},
			"layerCategory": "水系.双线河",
			"maxzoom": 14.27,
			"paint": {
				"fill-outline-color": "#B8E3FC",
				"fill-color": "#CCEBFD"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "水系.双线河",
				"maxzoom": 14.27,
				"paint": {
					"fill-outline-color": "#B8E3FC",
					"fill-color": "#CCEBFD"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "水系.双线河",
					"maxzoom": 14.27,
					"paint": {
						"fill-outline-color": "#B8E3FC",
						"fill-color": "#CCEBFD"
					},
					"attributes": [{
						"layout": {},
						"maxzoom": 14.27,
						"paint": {
							"fill-outline-color": "#B8E3FC",
							"fill-color": "#CCEBFD"
						},
						"id": "水系/双线河",
						"source": "esri",
						"source-layer": "双线河",
						"type": "fill",
						"minzoom": 9.53
					}],
					"id": "水系/双线河",
					"source": "esri",
					"source-layer": "双线河",
					"type": "fill",
					"minzoom": 9.53
				}],
				"id": "水系/双线河",
				"source": "esri",
				"source-layer": "双线河",
				"type": "fill",
				"minzoom": 9.53
			}],
			"id": "水系/双线河",
			"source": "esri",
			"source-layer": "双线河",
			"type": "fill",
			"minzoom": 9.53
		},
		{
			"layout": {},
			"layerCategory": "水系.长江",
			"maxzoom": 14.27,
			"paint": {
				"fill-outline-color": "#B8E3FC",
				"fill-color": "#CCEBFD"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "水系.长江",
				"maxzoom": 14.27,
				"paint": {
					"fill-outline-color": "#B8E3FC",
					"fill-color": "#CCEBFD"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "水系.长江",
					"maxzoom": 14.27,
					"paint": {
						"fill-outline-color": "#B8E3FC",
						"fill-color": "#CCEBFD"
					},
					"attributes": [{
						"layout": {},
						"maxzoom": 14.27,
						"paint": {
							"fill-outline-color": "#B8E3FC",
							"fill-color": "#CCEBFD"
						},
						"id": "水系/长江",
						"source": "esri",
						"source-layer": "长江",
						"type": "fill",
						"minzoom": 7.21
					}],
					"id": "水系/长江",
					"source": "esri",
					"source-layer": "长江",
					"type": "fill",
					"minzoom": 7.21
				}],
				"id": "水系/长江",
				"source": "esri",
				"source-layer": "长江",
				"type": "fill",
				"minzoom": 7.21
			}],
			"id": "水系/长江",
			"source": "esri",
			"source-layer": "长江",
			"type": "fill",
			"minzoom": 7.21
		},
		{
			"layout": {},
			"layerCategory": "居民地.街区",
			"maxzoom": 15,
			"paint": {
				"fill-outline-color": "#FFFFFF",
				"fill-color": "#F2F2F2"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "居民地.街区",
				"maxzoom": 15,
				"paint": {
					"fill-outline-color": "#FFFFFF",
					"fill-color": "#F2F2F2"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "居民地.街区",
					"maxzoom": 15,
					"paint": {
						"fill-outline-color": "#FFFFFF",
						"fill-color": "#F2F2F2"
					},
					"attributes": [{
						"layout": {},
						"maxzoom": 15,
						"paint": {
							"fill-outline-color": "#FFFFFF",
							"fill-color": "#F2F2F2"
						},
						"id": "居民地/街区",
						"source": "esri",
						"source-layer": "街区",
						"type": "fill",
						"minzoom": 10.53
					}],
					"id": "居民地/街区",
					"source": "esri",
					"source-layer": "街区",
					"type": "fill",
					"minzoom": 10.53
				}],
				"id": "居民地/街区",
				"source": "esri",
				"source-layer": "街区",
				"type": "fill",
				"title": "街区",
				"minzoom": 10.53
			}],
			"id": "居民地/街区",
			"source": "esri",
			"source-layer": "街区",
			"type": "fill",
			"title": "街区",
			"minzoom": 10.53
		},
		{
			"layout": {},
			"layerCategory": "居民地.小区面",
			"paint": {
				"fill-outline-color": "#FFFFFF",
				"fill-color": "#F2F2F2"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "居民地.小区面",
				"paint": {
					"fill-outline-color": "#FFFFFF",
					"fill-color": "#F2F2F2"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "居民地.小区面",
					"paint": {
						"fill-outline-color": "#FFFFFF",
						"fill-color": "#F2F2F2"
					},
					"attributes": [{
						"layout": {},
						"paint": {
							"fill-outline-color": "#FFFFFF",
							"fill-color": "#F2F2F2"
						},
						"id": "居民地/小区面",
						"source": "esri",
						"source-layer": "小区面",
						"type": "fill",
						"minzoom": 15
					}],
					"id": "居民地/小区面",
					"source": "esri",
					"source-layer": "小区面",
					"type": "fill",
					"minzoom": 15
				}],
				"id": "居民地/小区面",
				"source": "esri",
				"source-layer": "小区面",
				"type": "fill",
				"minzoom": 15
			}],
			"id": "居民地/小区面",
			"source": "esri",
			"source-layer": "小区面",
			"type": "fill",
			"minzoom": 15
		},
		{
			"layout": {},
			"layerCategory": "居民地.房屋",
			"paint": {
				"fill-color": "#E8E8E8"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "居民地.房屋",
				"paint": {
					"fill-color": "#E8E8E8"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "居民地.房屋",
					"paint": {
						"fill-color": "#E8E8E8"
					},
					"attributes": [{
						"layout": {},
						"paint": {
							"fill-color": "#E8E8E8"
						},
						"id": "居民地/JMD_FANGWU_A/1",
						"source": "esri",
						"source-layer": "JMD_FANGWU_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "居民地/JMD_FANGWU_A/1",
					"source": "esri",
					"source-layer": "JMD_FANGWU_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "居民地/JMD_FANGWU_A/1",
				"source": "esri",
				"source-layer": "JMD_FANGWU_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "居民地/JMD_FANGWU_A/1",
			"source": "esri",
			"source-layer": "JMD_FANGWU_A",
			"type": "fill",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "交通.地铁站面",
			"paint": {
				"fill-color": "#F5F3E3"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "交通.地铁站面",
				"paint": {
					"fill-color": "#F5F3E3"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "交通.地铁站面",
					"paint": {
						"fill-color": "#F5F3E3"
					},
					"attributes": [{
						"layout": {},
						"paint": {
							"fill-color": "#F5F3E3"
						},
						"id": "交通/地铁站面/1",
						"source": "esri",
						"source-layer": "地铁站面",
						"type": "fill",
						"minzoom": 16.17
					}],
					"id": "交通/地铁站面/1",
					"source": "esri",
					"source-layer": "地铁站面",
					"type": "fill",
					"minzoom": 16.17
				}],
				"id": "交通/地铁站面/1",
				"source": "esri",
				"source-layer": "地铁站面",
				"type": "fill",
				"minzoom": 16.17
			}],
			"id": "交通/地铁站面/1",
			"source": "esri",
			"source-layer": "地铁站面",
			"type": "fill",
			"minzoom": 16.17
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.全部道路",
			"paint": {
				"line-width": 1.33333,
				"line-color": "#DFD9CC"
			},
			"attributes": [{
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.全部道路",
				"paint": {
					"line-width": 1.33333,
					"line-color": "#DFD9CC"
				},
				"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.全部道路",
					"paint": {
						"line-width": 1.33333,
						"line-color": "#DFD9CC"
					},
					"attributes": [{
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 1.33333,
							"line-color": "#DFD9CC"
						},
						"id": "交通/JT_YAOSU_L",
						"source": "esri",
						"source-layer": "JT_YAOSU_L",
						"type": "line",
						"minzoom": 14.27
					}],
					"id": "交通/JT_YAOSU_L",
					"source": "esri",
					"source-layer": "JT_YAOSU_L",
					"type": "line",
					"minzoom": 14.27
				}],
				"id": "交通/JT_YAOSU_L",
				"source": "esri",
				"source-layer": "JT_YAOSU_L",
				"type": "line",
				"minzoom": 14.27
			}],
			"id": "交通/JT_YAOSU_L",
			"source": "esri",
			"source-layer": "JT_YAOSU_L",
			"type": "line",
			"minzoom": 14.27
		},
		{
			"layout": {},
			"layerCategory": "交通.桥梁面",
			"paint": {
				"fill-color": "#EAEAE1"
			},
			"attributes": [{
				"layout": {},
				"layerCategory": "交通.桥梁面",
				"paint": {
					"fill-color": "#EAEAE1"
				},
				"attributes": [{
					"layout": {},
					"layerCategory": "交通.桥梁面",
					"paint": {
						"fill-color": "#EAEAE1"
					},
					"attributes": [{
						"layout": {},
						"paint": {
							"fill-color": "#EAEAE1"
						},
						"id": "交通/JT_QITA_A/1",
						"source": "esri",
						"source-layer": "JT_QITA_A",
						"type": "fill",
						"minzoom": 14.27
					}],
					"id": "交通/JT_QITA_A/1",
					"source": "esri",
					"source-layer": "JT_QITA_A",
					"type": "fill",
					"minzoom": 14.27
				}],
				"id": "交通/JT_QITA_A/1",
				"source": "esri",
				"source-layer": "JT_QITA_A",
				"type": "fill",
				"minzoom": 14.27
			}],
			"id": "交通/JT_QITA_A/1",
			"source": "esri",
			"source-layer": "JT_QITA_A",
			"type": "fill",
			"minzoom": 14.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"paint": {
				"line-width": {
					"stops": [
						[
							8.21,
							2
						],
						[
							19,
							6.66667
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/JT_TIELU_L/1",
			"source": "esri",
			"source-layer": "JT_TIELU_L",
			"type": "line",
			"minzoom": 8.21
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.铁路",
			"paint": {
				"line-width": {
					"stops": [
						[
							8.21,
							1.12
						],
						[
							19,
							3.73333
						]
					]
				},
				"line-dasharray": [
					7.14286,
					7.14286
				],
				"line-color": "#FFFFFF"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.铁路",
					"paint": {
						"line-width": {
							"stops": [
								[
									8.21,
									1.12
								],
								[
									19,
									3.73333
								]
							]
						},
						"line-dasharray": [
							7.14286,
							7.14286
						],
						"line-color": "#FFFFFF"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.铁路",
							"paint": {
								"line-width": {
									"stops": [
										[
											8.21,
											1.12
										],
										[
											19,
											3.73333
										]
									]
								},
								"line-dasharray": [
									7.14286,
									7.14286
								],
								"line-color": "#FFFFFF"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"paint": {
										"line-width": {
											"stops": [
												[
													8.21,
													1.12
												],
												[
													19,
													3.73333
												]
											]
										},
										"line-dasharray": [
											7.14286,
											7.14286
										],
										"line-color": "#FFFFFF"
									},
									"id": "交通/JT_TIELU_L/0",
									"source": "esri",
									"source-layer": "JT_TIELU_L",
									"type": "line",
									"minzoom": 8.21
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"paint": {
										"line-width": {
											"stops": [
												[
													8.21,
													2
												],
												[
													19,
													6.66667
												]
											]
										},
										"line-color": "#CCCCCC"
									},
									"id": "交通/JT_TIELU_L/1",
									"source": "esri",
									"source-layer": "JT_TIELU_L",
									"type": "line",
									"minzoom": 8.21
								}
							],
							"id": "交通/JT_TIELU_L/0",
							"source": "esri",
							"source-layer": "JT_TIELU_L",
							"type": "line",
							"minzoom": 8.21
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"paint": {
								"line-width": {
									"stops": [
										[
											8.21,
											2
										],
										[
											19,
											6.66667
										]
									]
								},
								"line-color": "#CCCCCC"
							},
							"id": "交通/JT_TIELU_L/1",
							"source": "esri",
							"source-layer": "JT_TIELU_L",
							"type": "line",
							"minzoom": 8.21
						}
					],
					"id": "交通/JT_TIELU_L/0",
					"source": "esri",
					"source-layer": "JT_TIELU_L",
					"type": "line",
					"minzoom": 8.21
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"paint": {
						"line-width": {
							"stops": [
								[
									8.21,
									2
								],
								[
									19,
									6.66667
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/JT_TIELU_L/1",
					"source": "esri",
					"source-layer": "JT_TIELU_L",
					"type": "line",
					"minzoom": 8.21
				}
			],
			"id": "交通/JT_TIELU_L/0",
			"source": "esri",
			"source-layer": "JT_TIELU_L",
			"type": "line",
			"minzoom": 8.21
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 3.33333,
				"line-color": "#CCCCCC"
			},
			"id": "交通/机耕路/1",
			"source": "esri",
			"source-layer": "机耕路",
			"type": "line",
			"minzoom": 13.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.机耕路",
			"maxzoom": 14.27,
			"paint": {
				"line-width": 2.38095,
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.机耕路",
					"maxzoom": 14.27,
					"paint": {
						"line-width": 2.38095,
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.机耕路",
							"maxzoom": 14.27,
							"paint": {
								"line-width": 2.38095,
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 2.38095,
										"line-color": "#FAFAFA"
									},
									"id": "交通/机耕路/0",
									"source": "esri",
									"source-layer": "机耕路",
									"type": "line",
									"minzoom": 13.27
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 3.33333,
										"line-color": "#CCCCCC"
									},
									"id": "交通/机耕路/1",
									"source": "esri",
									"source-layer": "机耕路",
									"type": "line",
									"minzoom": 13.27
								}
							],
							"id": "交通/机耕路/0",
							"source": "esri",
							"source-layer": "机耕路",
							"type": "line",
							"minzoom": 13.27
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 3.33333,
								"line-color": "#CCCCCC"
							},
							"id": "交通/机耕路/1",
							"source": "esri",
							"source-layer": "机耕路",
							"type": "line",
							"minzoom": 13.27
						}
					],
					"id": "交通/机耕路/0",
					"source": "esri",
					"source-layer": "机耕路",
					"type": "line",
					"minzoom": 13.27
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 3.33333,
						"line-color": "#CCCCCC"
					},
					"id": "交通/机耕路/1",
					"source": "esri",
					"source-layer": "机耕路",
					"type": "line",
					"minzoom": 13.27
				}
			],
			"id": "交通/机耕路/0",
			"source": "esri",
			"source-layer": "机耕路",
			"type": "line",
			"minzoom": 13.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.辅助道路",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							11.53,
							2.66667
						],
						[
							14.27,
							3.33333
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"attributes": [{
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.辅助道路",
				"maxzoom": 14.27,
				"paint": {
					"line-width": {
						"stops": [
							[
								11.53,
								2.66667
							],
							[
								14.27,
								3.33333
							]
						]
					},
					"line-color": "#CCCCCC"
				},
				"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.辅助道路",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									11.53,
									2.66667
								],
								[
									14.27,
									3.33333
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"attributes": [{
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"maxzoom": 14.27,
						"paint": {
							"line-width": {
								"stops": [
									[
										11.53,
										2.66667
									],
									[
										14.27,
										3.33333
									]
								]
							},
							"line-color": "#CCCCCC"
						},
						"id": "交通/其他道路/1",
						"source": "esri",
						"source-layer": "其他道路",
						"type": "line",
						"minzoom": 11.53
					}],
					"id": "交通/其他道路/1",
					"source": "esri",
					"source-layer": "其他道路",
					"type": "line",
					"minzoom": 11.53
				}],
				"id": "交通/其他道路/1",
				"source": "esri",
				"source-layer": "其他道路",
				"type": "line",
				"minzoom": 11.53
			}],
			"id": "交通/其他道路/1",
			"source": "esri",
			"source-layer": "其他道路",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.其他道路",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							11.53,
							1.90476
						],
						[
							14.27,
							2.38095
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.其他道路",
				"maxzoom": 14.27,
				"paint": {
					"line-width": {
						"stops": [
							[
								11.53,
								1.90476
							],
							[
								14.27,
								2.38095
							]
						]
					},
					"line-color": "#FAFAFA"
				},
				"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.其他道路",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									11.53,
									1.90476
								],
								[
									14.27,
									2.38095
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"maxzoom": 14.27,
						"paint": {
							"line-width": {
								"stops": [
									[
										11.53,
										1.90476
									],
									[
										14.27,
										2.38095
									]
								]
							},
							"line-color": "#FAFAFA"
						},
						"id": "交通/其他道路/0",
						"source": "esri",
						"source-layer": "其他道路",
						"type": "line",
						"minzoom": 11.53
					}],
					"id": "交通/其他道路/0",
					"source": "esri",
					"source-layer": "其他道路",
					"type": "line",
					"minzoom": 11.53
				}],
				"id": "交通/其他道路/0",
				"source": "esri",
				"source-layer": "其他道路",
				"type": "line",
				"minzoom": 11.53
			}],
			"id": "交通/其他道路/0",
			"source": "esri",
			"source-layer": "其他道路",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							11.53,
							2.66667
						],
						[
							14.27,
							3.33333
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/支路中心线/1",
			"source": "esri",
			"source-layer": "支路中心线",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.支路",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							11.53,
							1.90476
						],
						[
							14.27,
							2.38095
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.支路",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									11.53,
									1.90476
								],
								[
									14.27,
									2.38095
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.支路",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											11.53,
											1.90476
										],
										[
											14.27,
											2.38095
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													11.53,
													1.90476
												],
												[
													14.27,
													2.38095
												]
											]
										},
										"line-color": "#FAFAFA"
									},
									"id": "交通/支路中心线/0",
									"source": "esri",
									"source-layer": "支路中心线",
									"type": "line",
									"minzoom": 11.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													11.53,
													2.66667
												],
												[
													14.27,
													3.33333
												]
											]
										},
										"line-color": "#CCCCCC"
									},
									"id": "交通/支路中心线/1",
									"source": "esri",
									"source-layer": "支路中心线",
									"type": "line",
									"minzoom": 11.53
								}
							],
							"id": "交通/支路中心线/0",
							"source": "esri",
							"source-layer": "支路中心线",
							"type": "line",
							"minzoom": 11.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											11.53,
											2.66667
										],
										[
											14.27,
											3.33333
										]
									]
								},
								"line-color": "#CCCCCC"
							},
							"id": "交通/支路中心线/1",
							"source": "esri",
							"source-layer": "支路中心线",
							"type": "line",
							"minzoom": 11.53
						}
					],
					"id": "交通/支路中心线/0",
					"source": "esri",
					"source-layer": "支路中心线",
					"type": "line",
					"minzoom": 11.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									11.53,
									2.66667
								],
								[
									14.27,
									3.33333
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/支路中心线/1",
					"source": "esri",
					"source-layer": "支路中心线",
					"type": "line",
					"minzoom": 11.53
				}
			],
			"id": "交通/支路中心线/0",
			"source": "esri",
			"source-layer": "支路中心线",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 3.33333,
				"line-color": "#CCCCCC"
			},
			"id": "交通/乡道/1",
			"source": "esri",
			"source-layer": "乡道",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.乡道",
			"maxzoom": 14.27,
			"paint": {
				"line-width": 2.38095,
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.乡道",
					"maxzoom": 14.27,
					"paint": {
						"line-width": 2.38095,
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.乡道",
							"maxzoom": 14.27,
							"paint": {
								"line-width": 2.38095,
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 2.38095,
										"line-color": "#FAFAFA"
									},
									"id": "交通/乡道/0",
									"source": "esri",
									"source-layer": "乡道",
									"type": "line",
									"minzoom": 11.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 3.33333,
										"line-color": "#CCCCCC"
									},
									"id": "交通/乡道/1",
									"source": "esri",
									"source-layer": "乡道",
									"type": "line",
									"minzoom": 11.53
								}
							],
							"id": "交通/乡道/0",
							"source": "esri",
							"source-layer": "乡道",
							"type": "line",
							"minzoom": 11.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 3.33333,
								"line-color": "#CCCCCC"
							},
							"id": "交通/乡道/1",
							"source": "esri",
							"source-layer": "乡道",
							"type": "line",
							"minzoom": 11.53
						}
					],
					"id": "交通/乡道/0",
					"source": "esri",
					"source-layer": "乡道",
					"type": "line",
					"minzoom": 11.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 3.33333,
						"line-color": "#CCCCCC"
					},
					"id": "交通/乡道/1",
					"source": "esri",
					"source-layer": "乡道",
					"type": "line",
					"minzoom": 11.53
				}
			],
			"id": "交通/乡道/0",
			"source": "esri",
			"source-layer": "乡道",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							10.53,
							2.66667
						],
						[
							14.27,
							2.66667
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/县道/1",
			"source": "esri",
			"source-layer": "县道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.县道",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							10.53,
							1.6
						],
						[
							14.27,
							1.6
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.县道",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									10.53,
									1.6
								],
								[
									14.27,
									1.6
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.县道",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											10.53,
											1.6
										],
										[
											14.27,
											1.6
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													10.53,
													1.6
												],
												[
													14.27,
													1.6
												]
											]
										},
										"line-color": "#FAFAFA"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.县道",
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															10.53,
															1.6
														],
														[
															14.27,
															1.6
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.县道",
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	10.53,
																	1.6
																],
																[
																	14.27,
																	1.6
																]
															]
														},
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.县道",
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			10.53,
																			1.6
																		],
																		[
																			14.27,
																			1.6
																		]
																	]
																},
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					10.53,
																					1.6
																				],
																				[
																					14.27,
																					1.6
																				]
																			]
																		},
																		"line-color": "#FAFAFA"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							10.53,
																							1.6
																						],
																						[
																							14.27,
																							1.6
																						]
																					]
																				},
																				"line-color": "#FAFAFA"
																			},
																			"id": "交通/县道/0",
																			"source": "esri",
																			"source-layer": "县道",
																			"type": "line",
																			"minzoom": 9.53
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							10.53,
																							2.66667
																						],
																						[
																							14.27,
																							2.66667
																						]
																					]
																				},
																				"line-color": "#CCCCCC"
																			},
																			"id": "交通/县道/1",
																			"source": "esri",
																			"source-layer": "县道",
																			"type": "line",
																			"minzoom": 9.53
																		}
																	],
																	"id": "交通/县道/0",
																	"source": "esri",
																	"source-layer": "县道",
																	"type": "line",
																	"title": "县道",
																	"minzoom": 9.53
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					10.53,
																					2.66667
																				],
																				[
																					14.27,
																					2.66667
																				]
																			]
																		},
																		"line-color": "#CCCCCC"
																	},
																	"id": "交通/县道/1",
																	"source": "esri",
																	"source-layer": "县道",
																	"type": "line",
																	"minzoom": 9.53
																}
															],
															"id": "交通/县道/0",
															"source": "esri",
															"source-layer": "县道",
															"type": "line",
															"title": "县道",
															"minzoom": 9.53
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			10.53,
																			2.66667
																		],
																		[
																			14.27,
																			2.66667
																		]
																	]
																},
																"line-color": "#CCCCCC"
															},
															"id": "交通/县道/1",
															"source": "esri",
															"source-layer": "县道",
															"type": "line",
															"minzoom": 9.53
														}
													],
													"id": "交通/县道/0",
													"source": "esri",
													"source-layer": "县道",
													"type": "line",
													"title": "县道",
													"minzoom": 9.53
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	10.53,
																	2.66667
																],
																[
																	14.27,
																	2.66667
																]
															]
														},
														"line-color": "#CCCCCC"
													},
													"id": "交通/县道/1",
													"source": "esri",
													"source-layer": "县道",
													"type": "line",
													"minzoom": 9.53
												}
											],
											"id": "交通/县道/0",
											"source": "esri",
											"source-layer": "县道",
											"type": "line",
											"title": "县道",
											"minzoom": 9.53
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															10.53,
															2.66667
														],
														[
															14.27,
															2.66667
														]
													]
												},
												"line-color": "#CCCCCC"
											},
											"id": "交通/县道/1",
											"source": "esri",
											"source-layer": "县道",
											"type": "line",
											"minzoom": 9.53
										}
									],
									"id": "交通/县道/0",
									"source": "esri",
									"source-layer": "县道",
									"type": "line",
									"title": "县道",
									"minzoom": 9.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													10.53,
													2.66667
												],
												[
													14.27,
													2.66667
												]
											]
										},
										"line-color": "#CCCCCC"
									},
									"id": "交通/县道/1",
									"source": "esri",
									"source-layer": "县道",
									"type": "line",
									"minzoom": 9.53
								}
							],
							"id": "交通/县道/0",
							"source": "esri",
							"source-layer": "县道",
							"type": "line",
							"title": "县道",
							"minzoom": 9.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											10.53,
											2.66667
										],
										[
											14.27,
											2.66667
										]
									]
								},
								"line-color": "#CCCCCC"
							},
							"id": "交通/县道/1",
							"source": "esri",
							"source-layer": "县道",
							"type": "line",
							"minzoom": 9.53
						}
					],
					"id": "交通/县道/0",
					"source": "esri",
					"source-layer": "县道",
					"type": "line",
					"title": "县道",
					"minzoom": 9.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									10.53,
									2.66667
								],
								[
									14.27,
									2.66667
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/县道/1",
					"source": "esri",
					"source-layer": "县道",
					"type": "line",
					"minzoom": 9.53
				}
			],
			"id": "交通/县道/0",
			"source": "esri",
			"source-layer": "县道",
			"type": "line",
			"title": "县道",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							11.53,
							2.93333
						],
						[
							14.27,
							4.66667
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/次干道/1",
			"source": "esri",
			"source-layer": "次干道",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.城市次干道",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							11.53,
							2.09524
						],
						[
							14.27,
							3.33333
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.城市次干道",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									11.53,
									2.09524
								],
								[
									14.27,
									3.33333
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.城市次干道",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											11.53,
											2.09524
										],
										[
											14.27,
											3.33333
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													11.53,
													2.09524
												],
												[
													14.27,
													3.33333
												]
											]
										},
										"line-color": "#FAFAFA"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.城市次干道",
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															11.53,
															2.09524
														],
														[
															14.27,
															3.33333
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.城市次干道",
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	11.53,
																	2.09524
																],
																[
																	14.27,
																	3.33333
																]
															]
														},
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.城市次干道",
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			11.53,
																			2.09524
																		],
																		[
																			14.27,
																			3.33333
																		]
																	]
																},
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					11.53,
																					2.09524
																				],
																				[
																					14.27,
																					3.33333
																				]
																			]
																		},
																		"line-color": "#FAFAFA"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							11.53,
																							2.09524
																						],
																						[
																							14.27,
																							3.33333
																						]
																					]
																				},
																				"line-color": "#FAFAFA"
																			},
																			"id": "交通/次干道/0",
																			"source": "esri",
																			"source-layer": "次干道",
																			"type": "line",
																			"minzoom": 11.53
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							11.53,
																							2.93333
																						],
																						[
																							14.27,
																							4.66667
																						]
																					]
																				},
																				"line-color": "#CCCCCC"
																			},
																			"id": "交通/次干道/1",
																			"source": "esri",
																			"source-layer": "次干道",
																			"type": "line",
																			"minzoom": 11.53
																		}
																	],
																	"id": "交通/次干道/0",
																	"source": "esri",
																	"source-layer": "次干道",
																	"type": "line",
																	"title": "城市次干道",
																	"minzoom": 11.53
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					11.53,
																					2.93333
																				],
																				[
																					14.27,
																					4.66667
																				]
																			]
																		},
																		"line-color": "#CCCCCC"
																	},
																	"id": "交通/次干道/1",
																	"source": "esri",
																	"source-layer": "次干道",
																	"type": "line",
																	"minzoom": 11.53
																}
															],
															"id": "交通/次干道/0",
															"source": "esri",
															"source-layer": "次干道",
															"type": "line",
															"title": "城市次干道",
															"minzoom": 11.53
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			11.53,
																			2.93333
																		],
																		[
																			14.27,
																			4.66667
																		]
																	]
																},
																"line-color": "#CCCCCC"
															},
															"id": "交通/次干道/1",
															"source": "esri",
															"source-layer": "次干道",
															"type": "line",
															"minzoom": 11.53
														}
													],
													"id": "交通/次干道/0",
													"source": "esri",
													"source-layer": "次干道",
													"type": "line",
													"title": "城市次干道",
													"minzoom": 11.53
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	11.53,
																	2.93333
																],
																[
																	14.27,
																	4.66667
																]
															]
														},
														"line-color": "#CCCCCC"
													},
													"id": "交通/次干道/1",
													"source": "esri",
													"source-layer": "次干道",
													"type": "line",
													"minzoom": 11.53
												}
											],
											"id": "交通/次干道/0",
											"source": "esri",
											"source-layer": "次干道",
											"type": "line",
											"title": "城市次干道",
											"minzoom": 11.53
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															11.53,
															2.93333
														],
														[
															14.27,
															4.66667
														]
													]
												},
												"line-color": "#CCCCCC"
											},
											"id": "交通/次干道/1",
											"source": "esri",
											"source-layer": "次干道",
											"type": "line",
											"minzoom": 11.53
										}
									],
									"id": "交通/次干道/0",
									"source": "esri",
									"source-layer": "次干道",
									"type": "line",
									"title": "城市次干道",
									"minzoom": 11.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													11.53,
													2.93333
												],
												[
													14.27,
													4.66667
												]
											]
										},
										"line-color": "#CCCCCC"
									},
									"id": "交通/次干道/1",
									"source": "esri",
									"source-layer": "次干道",
									"type": "line",
									"minzoom": 11.53
								}
							],
							"id": "交通/次干道/0",
							"source": "esri",
							"source-layer": "次干道",
							"type": "line",
							"title": "城市次干道",
							"minzoom": 11.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											11.53,
											2.93333
										],
										[
											14.27,
											4.66667
										]
									]
								},
								"line-color": "#CCCCCC"
							},
							"id": "交通/次干道/1",
							"source": "esri",
							"source-layer": "次干道",
							"type": "line",
							"minzoom": 11.53
						}
					],
					"id": "交通/次干道/0",
					"source": "esri",
					"source-layer": "次干道",
					"type": "line",
					"title": "城市次干道",
					"minzoom": 11.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									11.53,
									2.93333
								],
								[
									14.27,
									4.66667
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/次干道/1",
					"source": "esri",
					"source-layer": "次干道",
					"type": "line",
					"minzoom": 11.53
				}
			],
			"id": "交通/次干道/0",
			"source": "esri",
			"source-layer": "次干道",
			"type": "line",
			"title": "城市次干道",
			"minzoom": 11.53
		},
		{
			"filter": [
				"==",
				"_symbol",
				1
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							3.33333
						],
						[
							14.27,
							6
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/主干道/<其他所有值>/1",
			"source": "esri",
			"source-layer": "主干道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"filter": [
				"==",
				"_symbol",
				1
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							2
						],
						[
							14.27,
							3.6
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"id": "交通/主干道/<其他所有值>/0",
			"source": "esri",
			"source-layer": "主干道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"filter": [
				"==",
				"_symbol",
				0
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 5.33333,
				"line-color": "#FAD693"
			},
			"id": "交通/主干道/主干道/1",
			"source": "esri",
			"source-layer": "主干道",
			"type": "line",
			"minzoom": 13.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				0
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 3.2,
				"line-color": "#FCE2B2"
			},
			"id": "交通/主干道/主干道/0",
			"source": "esri",
			"source-layer": "主干道",
			"type": "line",
			"minzoom": 13.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				0
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 13.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							10,
							2.66667
						],
						[
							13.27,
							4.66667
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/主干道/主干道_1/1",
			"source": "esri",
			"source-layer": "主干道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"filter": [
				"==",
				"_symbol",
				0
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.城市主干道",
			"maxzoom": 13.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							10,
							1.6
						],
						[
							13.27,
							2.8
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"filter": [
						"==",
						"_symbol",
						0
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.城市主干道",
					"maxzoom": 13.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									10,
									1.6
								],
								[
									13.27,
									2.8
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"filter": [
								"==",
								"_symbol",
								0
							],
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.城市主干道",
							"maxzoom": 13.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											10,
											1.6
										],
										[
											13.27,
											2.8
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"filter": [
										"==",
										"_symbol",
										0
									],
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 13.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													10,
													1.6
												],
												[
													13.27,
													2.8
												]
											]
										},
										"line-color": "#FAFAFA"
									},
									"attributes": [{
											"filter": [
												"==",
												"_symbol",
												0
											],
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.城市主干道",
											"maxzoom": 13.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															10,
															1.6
														],
														[
															13.27,
															2.8
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"filter": [
														"==",
														"_symbol",
														0
													],
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.城市主干道",
													"maxzoom": 13.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	10,
																	1.6
																],
																[
																	13.27,
																	2.8
																]
															]
														},
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"filter": [
																"==",
																"_symbol",
																0
															],
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.城市主干道",
															"maxzoom": 13.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			10,
																			1.6
																		],
																		[
																			13.27,
																			2.8
																		]
																	]
																},
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"filter": [
																		"==",
																		"_symbol",
																		0
																	],
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 13.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					10,
																					1.6
																				],
																				[
																					13.27,
																					2.8
																				]
																			]
																		},
																		"line-color": "#FAFAFA"
																	},
																	"attributes": [{
																			"filter": [
																				"==",
																				"_symbol",
																				0
																			],
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 13.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							10,
																							1.6
																						],
																						[
																							13.27,
																							2.8
																						]
																					]
																				},
																				"line-color": "#FAFAFA"
																			},
																			"attributes": [{
																					"filter": [
																						"==",
																						"_symbol",
																						0
																					],
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 13.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									10,
																									1.6
																								],
																								[
																									13.27,
																									2.8
																								]
																							]
																						},
																						"line-color": "#FAFAFA"
																					},
																					"id": "交通/主干道/主干道_1/0",
																					"source": "esri",
																					"source-layer": "主干道",
																					"type": "line",
																					"minzoom": 9.53
																				},
																				{
																					"filter": [
																						"==",
																						"_symbol",
																						0
																					],
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 13.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									10,
																									2.66667
																								],
																								[
																									13.27,
																									4.66667
																								]
																							]
																						},
																						"line-color": "#CCCCCC"
																					},
																					"id": "交通/主干道/主干道_1/1",
																					"source": "esri",
																					"source-layer": "主干道",
																					"type": "line",
																					"minzoom": 9.53
																				},
																				{
																					"filter": [
																						"==",
																						"_symbol",
																						0
																					],
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": 3.2,
																						"line-color": "#FCE2B2"
																					},
																					"id": "交通/主干道/主干道/0",
																					"source": "esri",
																					"source-layer": "主干道",
																					"type": "line",
																					"minzoom": 13.27
																				},
																				{
																					"filter": [
																						"==",
																						"_symbol",
																						0
																					],
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": 5.33333,
																						"line-color": "#FAD693"
																					},
																					"id": "交通/主干道/主干道/1",
																					"source": "esri",
																					"source-layer": "主干道",
																					"type": "line",
																					"minzoom": 13.27
																				},
																				{
																					"filter": [
																						"==",
																						"_symbol",
																						1
																					],
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									9.53,
																									2
																								],
																								[
																									14.27,
																									3.6
																								]
																							]
																						},
																						"line-color": "#FAFAFA"
																					},
																					"id": "交通/主干道/<其他所有值>/0",
																					"source": "esri",
																					"source-layer": "主干道",
																					"type": "line",
																					"minzoom": 9.53
																				},
																				{
																					"filter": [
																						"==",
																						"_symbol",
																						1
																					],
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									9.53,
																									3.33333
																								],
																								[
																									14.27,
																									6
																								]
																							]
																						},
																						"line-color": "#CCCCCC"
																					},
																					"id": "交通/主干道/<其他所有值>/1",
																					"source": "esri",
																					"source-layer": "主干道",
																					"type": "line",
																					"minzoom": 9.53
																				}
																			],
																			"id": "交通/主干道/主干道_1/0",
																			"source": "esri",
																			"source-layer": "主干道",
																			"type": "line",
																			"title": "城市主干道",
																			"minzoom": 9.53
																		},
																		{
																			"filter": [
																				"==",
																				"_symbol",
																				0
																			],
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 13.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							10,
																							2.66667
																						],
																						[
																							13.27,
																							4.66667
																						]
																					]
																				},
																				"line-color": "#CCCCCC"
																			},
																			"id": "交通/主干道/主干道_1/1",
																			"source": "esri",
																			"source-layer": "主干道",
																			"type": "line",
																			"minzoom": 9.53
																		},
																		{
																			"filter": [
																				"==",
																				"_symbol",
																				0
																			],
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": 3.2,
																				"line-color": "#FCE2B2"
																			},
																			"id": "交通/主干道/主干道/0",
																			"source": "esri",
																			"source-layer": "主干道",
																			"type": "line",
																			"minzoom": 13.27
																		},
																		{
																			"filter": [
																				"==",
																				"_symbol",
																				0
																			],
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": 5.33333,
																				"line-color": "#FAD693"
																			},
																			"id": "交通/主干道/主干道/1",
																			"source": "esri",
																			"source-layer": "主干道",
																			"type": "line",
																			"minzoom": 13.27
																		},
																		{
																			"filter": [
																				"==",
																				"_symbol",
																				1
																			],
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							2
																						],
																						[
																							14.27,
																							3.6
																						]
																					]
																				},
																				"line-color": "#FAFAFA"
																			},
																			"id": "交通/主干道/<其他所有值>/0",
																			"source": "esri",
																			"source-layer": "主干道",
																			"type": "line",
																			"minzoom": 9.53
																		},
																		{
																			"filter": [
																				"==",
																				"_symbol",
																				1
																			],
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							3.33333
																						],
																						[
																							14.27,
																							6
																						]
																					]
																				},
																				"line-color": "#CCCCCC"
																			},
																			"id": "交通/主干道/<其他所有值>/1",
																			"source": "esri",
																			"source-layer": "主干道",
																			"type": "line",
																			"minzoom": 9.53
																		}
																	],
																	"id": "交通/主干道/主干道_1/0",
																	"source": "esri",
																	"source-layer": "主干道",
																	"type": "line",
																	"title": "城市主干道",
																	"minzoom": 9.53
																},
																{
																	"filter": [
																		"==",
																		"_symbol",
																		0
																	],
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 13.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					10,
																					2.66667
																				],
																				[
																					13.27,
																					4.66667
																				]
																			]
																		},
																		"line-color": "#CCCCCC"
																	},
																	"id": "交通/主干道/主干道_1/1",
																	"source": "esri",
																	"source-layer": "主干道",
																	"type": "line",
																	"minzoom": 9.53
																},
																{
																	"filter": [
																		"==",
																		"_symbol",
																		0
																	],
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": 3.2,
																		"line-color": "#FCE2B2"
																	},
																	"id": "交通/主干道/主干道/0",
																	"source": "esri",
																	"source-layer": "主干道",
																	"type": "line",
																	"minzoom": 13.27
																},
																{
																	"filter": [
																		"==",
																		"_symbol",
																		0
																	],
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": 5.33333,
																		"line-color": "#FAD693"
																	},
																	"id": "交通/主干道/主干道/1",
																	"source": "esri",
																	"source-layer": "主干道",
																	"type": "line",
																	"minzoom": 13.27
																},
																{
																	"filter": [
																		"==",
																		"_symbol",
																		1
																	],
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					2
																				],
																				[
																					14.27,
																					3.6
																				]
																			]
																		},
																		"line-color": "#FAFAFA"
																	},
																	"id": "交通/主干道/<其他所有值>/0",
																	"source": "esri",
																	"source-layer": "主干道",
																	"type": "line",
																	"minzoom": 9.53
																},
																{
																	"filter": [
																		"==",
																		"_symbol",
																		1
																	],
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					3.33333
																				],
																				[
																					14.27,
																					6
																				]
																			]
																		},
																		"line-color": "#CCCCCC"
																	},
																	"id": "交通/主干道/<其他所有值>/1",
																	"source": "esri",
																	"source-layer": "主干道",
																	"type": "line",
																	"minzoom": 9.53
																}
															],
															"id": "交通/主干道/主干道_1/0",
															"source": "esri",
															"source-layer": "主干道",
															"type": "line",
															"title": "城市主干道",
															"minzoom": 9.53
														},
														{
															"filter": [
																"==",
																"_symbol",
																0
															],
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 13.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			10,
																			2.66667
																		],
																		[
																			13.27,
																			4.66667
																		]
																	]
																},
																"line-color": "#CCCCCC"
															},
															"id": "交通/主干道/主干道_1/1",
															"source": "esri",
															"source-layer": "主干道",
															"type": "line",
															"minzoom": 9.53
														},
														{
															"filter": [
																"==",
																"_symbol",
																0
															],
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": 3.2,
																"line-color": "#FCE2B2"
															},
															"id": "交通/主干道/主干道/0",
															"source": "esri",
															"source-layer": "主干道",
															"type": "line",
															"minzoom": 13.27
														},
														{
															"filter": [
																"==",
																"_symbol",
																0
															],
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": 5.33333,
																"line-color": "#FAD693"
															},
															"id": "交通/主干道/主干道/1",
															"source": "esri",
															"source-layer": "主干道",
															"type": "line",
															"minzoom": 13.27
														},
														{
															"filter": [
																"==",
																"_symbol",
																1
															],
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			2
																		],
																		[
																			14.27,
																			3.6
																		]
																	]
																},
																"line-color": "#FAFAFA"
															},
															"id": "交通/主干道/<其他所有值>/0",
															"source": "esri",
															"source-layer": "主干道",
															"type": "line",
															"minzoom": 9.53
														},
														{
															"filter": [
																"==",
																"_symbol",
																1
															],
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			3.33333
																		],
																		[
																			14.27,
																			6
																		]
																	]
																},
																"line-color": "#CCCCCC"
															},
															"id": "交通/主干道/<其他所有值>/1",
															"source": "esri",
															"source-layer": "主干道",
															"type": "line",
															"minzoom": 9.53
														}
													],
													"id": "交通/主干道/主干道_1/0",
													"source": "esri",
													"source-layer": "主干道",
													"type": "line",
													"title": "城市主干道",
													"minzoom": 9.53
												},
												{
													"filter": [
														"==",
														"_symbol",
														0
													],
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 13.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	10,
																	2.66667
																],
																[
																	13.27,
																	4.66667
																]
															]
														},
														"line-color": "#CCCCCC"
													},
													"id": "交通/主干道/主干道_1/1",
													"source": "esri",
													"source-layer": "主干道",
													"type": "line",
													"minzoom": 9.53
												},
												{
													"filter": [
														"==",
														"_symbol",
														0
													],
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": 3.2,
														"line-color": "#FCE2B2"
													},
													"id": "交通/主干道/主干道/0",
													"source": "esri",
													"source-layer": "主干道",
													"type": "line",
													"minzoom": 13.27
												},
												{
													"filter": [
														"==",
														"_symbol",
														0
													],
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": 5.33333,
														"line-color": "#FAD693"
													},
													"id": "交通/主干道/主干道/1",
													"source": "esri",
													"source-layer": "主干道",
													"type": "line",
													"minzoom": 13.27
												},
												{
													"filter": [
														"==",
														"_symbol",
														1
													],
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	2
																],
																[
																	14.27,
																	3.6
																]
															]
														},
														"line-color": "#FAFAFA"
													},
													"id": "交通/主干道/<其他所有值>/0",
													"source": "esri",
													"source-layer": "主干道",
													"type": "line",
													"minzoom": 9.53
												},
												{
													"filter": [
														"==",
														"_symbol",
														1
													],
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	3.33333
																],
																[
																	14.27,
																	6
																]
															]
														},
														"line-color": "#CCCCCC"
													},
													"id": "交通/主干道/<其他所有值>/1",
													"source": "esri",
													"source-layer": "主干道",
													"type": "line",
													"minzoom": 9.53
												}
											],
											"id": "交通/主干道/主干道_1/0",
											"source": "esri",
											"source-layer": "主干道",
											"type": "line",
											"title": "城市主干道",
											"minzoom": 9.53
										},
										{
											"filter": [
												"==",
												"_symbol",
												0
											],
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 13.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															10,
															2.66667
														],
														[
															13.27,
															4.66667
														]
													]
												},
												"line-color": "#CCCCCC"
											},
											"id": "交通/主干道/主干道_1/1",
											"source": "esri",
											"source-layer": "主干道",
											"type": "line",
											"minzoom": 9.53
										},
										{
											"filter": [
												"==",
												"_symbol",
												0
											],
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 3.2,
												"line-color": "#FCE2B2"
											},
											"id": "交通/主干道/主干道/0",
											"source": "esri",
											"source-layer": "主干道",
											"type": "line",
											"minzoom": 13.27
										},
										{
											"filter": [
												"==",
												"_symbol",
												0
											],
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 5.33333,
												"line-color": "#FAD693"
											},
											"id": "交通/主干道/主干道/1",
											"source": "esri",
											"source-layer": "主干道",
											"type": "line",
											"minzoom": 13.27
										},
										{
											"filter": [
												"==",
												"_symbol",
												1
											],
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															2
														],
														[
															14.27,
															3.6
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"id": "交通/主干道/<其他所有值>/0",
											"source": "esri",
											"source-layer": "主干道",
											"type": "line",
											"minzoom": 9.53
										},
										{
											"filter": [
												"==",
												"_symbol",
												1
											],
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															3.33333
														],
														[
															14.27,
															6
														]
													]
												},
												"line-color": "#CCCCCC"
											},
											"id": "交通/主干道/<其他所有值>/1",
											"source": "esri",
											"source-layer": "主干道",
											"type": "line",
											"minzoom": 9.53
										}
									],
									"id": "交通/主干道/主干道_1/0",
									"source": "esri",
									"source-layer": "主干道",
									"type": "line",
									"title": "城市主干道",
									"minzoom": 9.53
								},
								{
									"filter": [
										"==",
										"_symbol",
										0
									],
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 13.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													10,
													2.66667
												],
												[
													13.27,
													4.66667
												]
											]
										},
										"line-color": "#CCCCCC"
									},
									"id": "交通/主干道/主干道_1/1",
									"source": "esri",
									"source-layer": "主干道",
									"type": "line",
									"minzoom": 9.53
								},
								{
									"filter": [
										"==",
										"_symbol",
										0
									],
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 3.2,
										"line-color": "#FCE2B2"
									},
									"id": "交通/主干道/主干道/0",
									"source": "esri",
									"source-layer": "主干道",
									"type": "line",
									"minzoom": 13.27
								},
								{
									"filter": [
										"==",
										"_symbol",
										0
									],
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 5.33333,
										"line-color": "#FAD693"
									},
									"id": "交通/主干道/主干道/1",
									"source": "esri",
									"source-layer": "主干道",
									"type": "line",
									"minzoom": 13.27
								},
								{
									"filter": [
										"==",
										"_symbol",
										1
									],
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													2
												],
												[
													14.27,
													3.6
												]
											]
										},
										"line-color": "#FAFAFA"
									},
									"id": "交通/主干道/<其他所有值>/0",
									"source": "esri",
									"source-layer": "主干道",
									"type": "line",
									"minzoom": 9.53
								},
								{
									"filter": [
										"==",
										"_symbol",
										1
									],
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													3.33333
												],
												[
													14.27,
													6
												]
											]
										},
										"line-color": "#CCCCCC"
									},
									"id": "交通/主干道/<其他所有值>/1",
									"source": "esri",
									"source-layer": "主干道",
									"type": "line",
									"minzoom": 9.53
								}
							],
							"id": "交通/主干道/主干道_1/0",
							"source": "esri",
							"source-layer": "主干道",
							"type": "line",
							"title": "城市主干道",
							"minzoom": 9.53
						},
						{
							"filter": [
								"==",
								"_symbol",
								0
							],
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 13.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											10,
											2.66667
										],
										[
											13.27,
											4.66667
										]
									]
								},
								"line-color": "#CCCCCC"
							},
							"id": "交通/主干道/主干道_1/1",
							"source": "esri",
							"source-layer": "主干道",
							"type": "line",
							"minzoom": 9.53
						},
						{
							"filter": [
								"==",
								"_symbol",
								0
							],
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 3.2,
								"line-color": "#FCE2B2"
							},
							"id": "交通/主干道/主干道/0",
							"source": "esri",
							"source-layer": "主干道",
							"type": "line",
							"minzoom": 13.27
						},
						{
							"filter": [
								"==",
								"_symbol",
								0
							],
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 5.33333,
								"line-color": "#FAD693"
							},
							"id": "交通/主干道/主干道/1",
							"source": "esri",
							"source-layer": "主干道",
							"type": "line",
							"minzoom": 13.27
						},
						{
							"filter": [
								"==",
								"_symbol",
								1
							],
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											2
										],
										[
											14.27,
											3.6
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"id": "交通/主干道/<其他所有值>/0",
							"source": "esri",
							"source-layer": "主干道",
							"type": "line",
							"minzoom": 9.53
						},
						{
							"filter": [
								"==",
								"_symbol",
								1
							],
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											3.33333
										],
										[
											14.27,
											6
										]
									]
								},
								"line-color": "#CCCCCC"
							},
							"id": "交通/主干道/<其他所有值>/1",
							"source": "esri",
							"source-layer": "主干道",
							"type": "line",
							"minzoom": 9.53
						}
					],
					"id": "交通/主干道/主干道_1/0",
					"source": "esri",
					"source-layer": "主干道",
					"type": "line",
					"title": "城市主干道",
					"minzoom": 9.53
				},
				{
					"filter": [
						"==",
						"_symbol",
						0
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 13.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									10,
									2.66667
								],
								[
									13.27,
									4.66667
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/主干道/主干道_1/1",
					"source": "esri",
					"source-layer": "主干道",
					"type": "line",
					"minzoom": 9.53
				},
				{
					"filter": [
						"==",
						"_symbol",
						0
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 3.2,
						"line-color": "#FCE2B2"
					},
					"id": "交通/主干道/主干道/0",
					"source": "esri",
					"source-layer": "主干道",
					"type": "line",
					"minzoom": 13.27
				},
				{
					"filter": [
						"==",
						"_symbol",
						0
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 5.33333,
						"line-color": "#FAD693"
					},
					"id": "交通/主干道/主干道/1",
					"source": "esri",
					"source-layer": "主干道",
					"type": "line",
					"minzoom": 13.27
				},
				{
					"filter": [
						"==",
						"_symbol",
						1
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									2
								],
								[
									14.27,
									3.6
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"id": "交通/主干道/<其他所有值>/0",
					"source": "esri",
					"source-layer": "主干道",
					"type": "line",
					"minzoom": 9.53
				},
				{
					"filter": [
						"==",
						"_symbol",
						1
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									3.33333
								],
								[
									14.27,
									6
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/主干道/<其他所有值>/1",
					"source": "esri",
					"source-layer": "主干道",
					"type": "line",
					"minzoom": 9.53
				}
			],
			"id": "交通/主干道/主干道_1/0",
			"source": "esri",
			"source-layer": "主干道",
			"type": "line",
			"title": "城市主干道",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							12.27,
							4
						],
						[
							14.27,
							6
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/快速高架/1",
			"source": "esri",
			"source-layer": "快速高架",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.快速路高架",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							12.27,
							2.4
						],
						[
							14.27,
							3.6
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.快速路高架",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									12.27,
									2.4
								],
								[
									14.27,
									3.6
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.快速路高架",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											12.27,
											2.4
										],
										[
											14.27,
											3.6
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													12.27,
													2.4
												],
												[
													14.27,
													3.6
												]
											]
										},
										"line-color": "#FCE2B2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.快速路高架",
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															12.27,
															2.4
														],
														[
															14.27,
															3.6
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.快速路高架",
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	12.27,
																	2.4
																],
																[
																	14.27,
																	3.6
																]
															]
														},
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.快速路高架",
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			12.27,
																			2.4
																		],
																		[
																			14.27,
																			3.6
																		]
																	]
																},
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					12.27,
																					2.4
																				],
																				[
																					14.27,
																					3.6
																				]
																			]
																		},
																		"line-color": "#FAFAFA"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							12.27,
																							2.4
																						],
																						[
																							14.27,
																							3.6
																						]
																					]
																				},
																				"line-color": "#FCE2B2"
																			},
																			"attributes": [{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									12.27,
																									2.4
																								],
																								[
																									14.27,
																									3.6
																								]
																							]
																						},
																						"line-color": "#FCE2B2"
																					},
																					"id": "交通/快速高架/0",
																					"source": "esri",
																					"source-layer": "快速高架",
																					"type": "line",
																					"minzoom": 12.27
																				},
																				{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									12.27,
																									4
																								],
																								[
																									14.27,
																									6
																								]
																							]
																						},
																						"line-color": "#FAD693"
																					},
																					"id": "交通/快速高架/1",
																					"source": "esri",
																					"source-layer": "快速高架",
																					"type": "line",
																					"minzoom": 12.27
																				}
																			],
																			"id": "交通/快速高架/0",
																			"source": "esri",
																			"source-layer": "快速高架",
																			"type": "line",
																			"title": "快速路高架",
																			"minzoom": 12.27
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							12.27,
																							4
																						],
																						[
																							14.27,
																							6
																						]
																					]
																				},
																				"line-color": "#FAD693"
																			},
																			"id": "交通/快速高架/1",
																			"source": "esri",
																			"source-layer": "快速高架",
																			"type": "line",
																			"minzoom": 12.27
																		}
																	],
																	"id": "交通/快速高架/0",
																	"source": "esri",
																	"source-layer": "快速高架",
																	"type": "line",
																	"title": "快速路高架",
																	"minzoom": 12.27
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					12.27,
																					4
																				],
																				[
																					14.27,
																					6
																				]
																			]
																		},
																		"line-color": "#FAD693"
																	},
																	"id": "交通/快速高架/1",
																	"source": "esri",
																	"source-layer": "快速高架",
																	"type": "line",
																	"minzoom": 12.27
																}
															],
															"id": "交通/快速高架/0",
															"source": "esri",
															"source-layer": "快速高架",
															"type": "line",
															"title": "快速路高架",
															"minzoom": 12.27
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			12.27,
																			4
																		],
																		[
																			14.27,
																			6
																		]
																	]
																},
																"line-color": "#FAD693"
															},
															"id": "交通/快速高架/1",
															"source": "esri",
															"source-layer": "快速高架",
															"type": "line",
															"minzoom": 12.27
														}
													],
													"id": "交通/快速高架/0",
													"source": "esri",
													"source-layer": "快速高架",
													"type": "line",
													"title": "快速路高架",
													"minzoom": 12.27
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	12.27,
																	4
																],
																[
																	14.27,
																	6
																]
															]
														},
														"line-color": "#FAD693"
													},
													"id": "交通/快速高架/1",
													"source": "esri",
													"source-layer": "快速高架",
													"type": "line",
													"minzoom": 12.27
												}
											],
											"id": "交通/快速高架/0",
											"source": "esri",
											"source-layer": "快速高架",
											"type": "line",
											"title": "快速路高架",
											"minzoom": 12.27
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															12.27,
															4
														],
														[
															14.27,
															6
														]
													]
												},
												"line-color": "#FAD693"
											},
											"id": "交通/快速高架/1",
											"source": "esri",
											"source-layer": "快速高架",
											"type": "line",
											"minzoom": 12.27
										}
									],
									"id": "交通/快速高架/0",
									"source": "esri",
									"source-layer": "快速高架",
									"type": "line",
									"title": "快速路高架",
									"minzoom": 12.27
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													12.27,
													4
												],
												[
													14.27,
													6
												]
											]
										},
										"line-color": "#FAD693"
									},
									"id": "交通/快速高架/1",
									"source": "esri",
									"source-layer": "快速高架",
									"type": "line",
									"minzoom": 12.27
								}
							],
							"id": "交通/快速高架/0",
							"source": "esri",
							"source-layer": "快速高架",
							"type": "line",
							"title": "快速路高架",
							"minzoom": 12.27
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											12.27,
											4
										],
										[
											14.27,
											6
										]
									]
								},
								"line-color": "#FAD693"
							},
							"id": "交通/快速高架/1",
							"source": "esri",
							"source-layer": "快速高架",
							"type": "line",
							"minzoom": 12.27
						}
					],
					"id": "交通/快速高架/0",
					"source": "esri",
					"source-layer": "快速高架",
					"type": "line",
					"title": "快速路高架",
					"minzoom": 12.27
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									12.27,
									4
								],
								[
									14.27,
									6
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/快速高架/1",
					"source": "esri",
					"source-layer": "快速高架",
					"type": "line",
					"minzoom": 12.27
				}
			],
			"id": "交通/快速高架/0",
			"source": "esri",
			"source-layer": "快速高架",
			"type": "line",
			"title": "快速路高架",
			"minzoom": 12.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							2.66667
						],
						[
							14.27,
							6
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/快速路/1",
			"source": "esri",
			"source-layer": "快速路",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.城市快速路",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							1.6
						],
						[
							14.27,
							3.6
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.城市快速路",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									1.6
								],
								[
									14.27,
									3.6
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.城市快速路",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											1.6
										],
										[
											14.27,
											3.6
										]
									]
								},
								"line-color": "#FAFAFA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													1.6
												],
												[
													14.27,
													3.6
												]
											]
										},
										"line-color": "#FCE2B2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.城市快速路",
											"maxzoom": 14.27,
											"paint": {
												"line-width": 2,
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.城市快速路",
													"maxzoom": 14.27,
													"paint": {
														"line-width": 2,
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.城市快速路",
															"maxzoom": 14.27,
															"paint": {
																"line-width": 2,
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					1.6
																				],
																				[
																					14.27,
																					3.6
																				]
																			]
																		},
																		"line-color": "#FCE2B2"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							1.6
																						],
																						[
																							14.27,
																							3.6
																						]
																					]
																				},
																				"line-color": "#FCE2B2"
																			},
																			"attributes": [{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									9.53,
																									1.6
																								],
																								[
																									14.27,
																									3.6
																								]
																							]
																						},
																						"line-color": "#F8DA8D"
																					},
																					"id": "交通/快速路/0",
																					"source": "esri",
																					"source-layer": "快速路",
																					"type": "line",
																					"minzoom": 9.53
																				},
																				{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									9.53,
																									2.66667
																								],
																								[
																									14.27,
																									6
																								]
																							]
																						},
																						"line-color": "#FAD693"
																					},
																					"id": "交通/快速路/1",
																					"source": "esri",
																					"source-layer": "快速路",
																					"type": "line",
																					"minzoom": 9.53
																				}
																			],
																			"id": "交通/快速路/0",
																			"source": "esri",
																			"source-layer": "快速路",
																			"type": "line",
																			"title": "城市快速路",
																			"minzoom": 9.53
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							2.66667
																						],
																						[
																							14.27,
																							6
																						]
																					]
																				},
																				"line-color": "#FAD693"
																			},
																			"id": "交通/快速路/1",
																			"source": "esri",
																			"source-layer": "快速路",
																			"type": "line",
																			"minzoom": 9.53
																		}
																	],
																	"id": "交通/快速路/0",
																	"source": "esri",
																	"source-layer": "快速路",
																	"type": "line",
																	"title": "城市快速路",
																	"minzoom": 9.53
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					2.66667
																				],
																				[
																					14.27,
																					6
																				]
																			]
																		},
																		"line-color": "#FAD693"
																	},
																	"id": "交通/快速路/1",
																	"source": "esri",
																	"source-layer": "快速路",
																	"type": "line",
																	"minzoom": 9.53
																}
															],
															"id": "交通/快速路/0",
															"source": "esri",
															"source-layer": "快速路",
															"type": "line",
															"title": "城市快速路",
															"minzoom": 9.53
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			2.66667
																		],
																		[
																			14.27,
																			6
																		]
																	]
																},
																"line-color": "#CCCCCC"
															},
															"id": "交通/快速路/1",
															"source": "esri",
															"source-layer": "快速路",
															"type": "line",
															"minzoom": 9.53
														}
													],
													"id": "交通/快速路/0",
													"source": "esri",
													"source-layer": "快速路",
													"type": "line",
													"title": "城市快速路",
													"minzoom": 9.53
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	2.66667
																],
																[
																	14.27,
																	6
																]
															]
														},
														"line-color": "#CCCCCC"
													},
													"id": "交通/快速路/1",
													"source": "esri",
													"source-layer": "快速路",
													"type": "line",
													"minzoom": 9.53
												}
											],
											"id": "交通/快速路/0",
											"source": "esri",
											"source-layer": "快速路",
											"type": "line",
											"title": "城市快速路",
											"minzoom": 9.53
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															2.66667
														],
														[
															14.27,
															6
														]
													]
												},
												"line-color": "#CCCCCC"
											},
											"id": "交通/快速路/1",
											"source": "esri",
											"source-layer": "快速路",
											"type": "line",
											"minzoom": 9.53
										}
									],
									"id": "交通/快速路/0",
									"source": "esri",
									"source-layer": "快速路",
									"type": "line",
									"title": "城市快速路",
									"minzoom": 9.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													2.66667
												],
												[
													14.27,
													6
												]
											]
										},
										"line-color": "#FAD693"
									},
									"id": "交通/快速路/1",
									"source": "esri",
									"source-layer": "快速路",
									"type": "line",
									"minzoom": 9.53
								}
							],
							"id": "交通/快速路/0",
							"source": "esri",
							"source-layer": "快速路",
							"type": "line",
							"title": "城市快速路",
							"minzoom": 9.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											2.66667
										],
										[
											14.27,
											6
										]
									]
								},
								"line-color": "#FAD693"
							},
							"id": "交通/快速路/1",
							"source": "esri",
							"source-layer": "快速路",
							"type": "line",
							"minzoom": 9.53
						}
					],
					"id": "交通/快速路/0",
					"source": "esri",
					"source-layer": "快速路",
					"type": "line",
					"title": "城市快速路",
					"minzoom": 9.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									2.66667
								],
								[
									14.27,
									6
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/快速路/1",
					"source": "esri",
					"source-layer": "快速路",
					"type": "line",
					"minzoom": 9.53
				}
			],
			"id": "交通/快速路/0",
			"source": "esri",
			"source-layer": "快速路",
			"type": "line",
			"title": "城市快速路",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							3.33333
						],
						[
							14.27,
							5.33333
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/省道/1",
			"source": "esri",
			"source-layer": "省道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.省道",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							1.90476
						],
						[
							14.27,
							3.04762
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.省道",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									1.90476
								],
								[
									14.27,
									3.04762
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.省道",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											1.90476
										],
										[
											14.27,
											3.04762
										]
									]
								},
								"line-color": "#FCE2B2"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													1.90476
												],
												[
													14.27,
													3.04762
												]
											]
										},
										"line-color": "#FCE2B2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.省道",
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															1.90476
														],
														[
															14.27,
															3.04762
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.省道",
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	1.90476
																],
																[
																	14.27,
																	3.04762
																]
															]
														},
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.省道",
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			1.90476
																		],
																		[
																			14.27,
																			3.04762
																		]
																	]
																},
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					1.90476
																				],
																				[
																					14.27,
																					3.04762
																				]
																			]
																		},
																		"line-color": "#FAFAFA"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							1.90476
																						],
																						[
																							14.27,
																							3.04762
																						]
																					]
																				},
																				"line-color": "#FCE2B2"
																			},
																			"attributes": [{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									9.53,
																									1.90476
																								],
																								[
																									14.27,
																									3.04762
																								]
																							]
																						},
																						"line-color": "#F4C755"
																					},
																					"id": "交通/省道/0",
																					"source": "esri",
																					"source-layer": "省道",
																					"type": "line",
																					"minzoom": 9.53
																				},
																				{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": {
																							"stops": [
																								[
																									9.53,
																									3.33333
																								],
																								[
																									14.27,
																									5.33333
																								]
																							]
																						},
																						"line-color": "#F8C15B"
																					},
																					"id": "交通/省道/1",
																					"source": "esri",
																					"source-layer": "省道",
																					"type": "line",
																					"minzoom": 9.53
																				}
																			],
																			"id": "交通/省道/0",
																			"source": "esri",
																			"source-layer": "省道",
																			"type": "line",
																			"title": "省道",
																			"minzoom": 9.53
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							3.33333
																						],
																						[
																							14.27,
																							5.33333
																						]
																					]
																				},
																				"line-color": "#F8C15B"
																			},
																			"id": "交通/省道/1",
																			"source": "esri",
																			"source-layer": "省道",
																			"type": "line",
																			"minzoom": 9.53
																		}
																	],
																	"id": "交通/省道/0",
																	"source": "esri",
																	"source-layer": "省道",
																	"type": "line",
																	"title": "省道",
																	"minzoom": 9.53
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					3.33333
																				],
																				[
																					14.27,
																					5.33333
																				]
																			]
																		},
																		"line-color": "#F8C15B"
																	},
																	"id": "交通/省道/1",
																	"source": "esri",
																	"source-layer": "省道",
																	"type": "line",
																	"minzoom": 9.53
																}
															],
															"id": "交通/省道/0",
															"source": "esri",
															"source-layer": "省道",
															"type": "line",
															"title": "省道",
															"minzoom": 9.53
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			3.33333
																		],
																		[
																			14.27,
																			5.33333
																		]
																	]
																},
																"line-color": "#F8C15B"
															},
															"id": "交通/省道/1",
															"source": "esri",
															"source-layer": "省道",
															"type": "line",
															"minzoom": 9.53
														}
													],
													"id": "交通/省道/0",
													"source": "esri",
													"source-layer": "省道",
													"type": "line",
													"title": "省道",
													"minzoom": 9.53
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	3.33333
																],
																[
																	14.27,
																	5.33333
																]
															]
														},
														"line-color": "#F8C15B"
													},
													"id": "交通/省道/1",
													"source": "esri",
													"source-layer": "省道",
													"type": "line",
													"minzoom": 9.53
												}
											],
											"id": "交通/省道/0",
											"source": "esri",
											"source-layer": "省道",
											"type": "line",
											"title": "省道",
											"minzoom": 9.53
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															3.33333
														],
														[
															14.27,
															5.33333
														]
													]
												},
												"line-color": "#CCCCCC"
											},
											"id": "交通/省道/1",
											"source": "esri",
											"source-layer": "省道",
											"type": "line",
											"minzoom": 9.53
										}
									],
									"id": "交通/省道/0",
									"source": "esri",
									"source-layer": "省道",
									"type": "line",
									"title": "省道",
									"minzoom": 9.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													3.33333
												],
												[
													14.27,
													5.33333
												]
											]
										},
										"line-color": "#F8C15B"
									},
									"id": "交通/省道/1",
									"source": "esri",
									"source-layer": "省道",
									"type": "line",
									"minzoom": 9.53
								}
							],
							"id": "交通/省道/0",
							"source": "esri",
							"source-layer": "省道",
							"type": "line",
							"title": "省道",
							"minzoom": 9.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											3.33333
										],
										[
											14.27,
											5.33333
										]
									]
								},
								"line-color": "#F8C15B"
							},
							"id": "交通/省道/1",
							"source": "esri",
							"source-layer": "省道",
							"type": "line",
							"minzoom": 9.53
						}
					],
					"id": "交通/省道/0",
					"source": "esri",
					"source-layer": "省道",
					"type": "line",
					"title": "省道",
					"minzoom": 9.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									3.33333
								],
								[
									14.27,
									5.33333
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/省道/1",
					"source": "esri",
					"source-layer": "省道",
					"type": "line",
					"minzoom": 9.53
				}
			],
			"id": "交通/省道/0",
			"source": "esri",
			"source-layer": "省道",
			"type": "line",
			"title": "省道",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							3.33333
						],
						[
							14.27,
							5.33333
						]
					]
				},
				"line-color": "#CCCCCC"
			},
			"id": "交通/国道/1",
			"source": "esri",
			"source-layer": "国道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.国道",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							9.53,
							2.15686
						],
						[
							14.27,
							3.45098
						]
					]
				},
				"line-color": "#FAFAFA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.国道",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									2.15686
								],
								[
									14.27,
									3.45098
								]
							]
						},
						"line-color": "#FAFAFA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.国道",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											2.15686
										],
										[
											14.27,
											3.45098
										]
									]
								},
								"line-color": "#FCE2B2"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													2.15686
												],
												[
													14.27,
													3.45098
												]
											]
										},
										"line-color": "#FCE2B2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.国道",
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															2.15686
														],
														[
															14.27,
															3.45098
														]
													]
												},
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.国道",
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	2.15686
																],
																[
																	14.27,
																	3.45098
																]
															]
														},
														"line-color": "#FCE2B2"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.国道",
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			2.15686
																		],
																		[
																			14.27,
																			3.45098
																		]
																	]
																},
																"line-color": "#FCE2B2"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					2.15686
																				],
																				[
																					14.27,
																					3.45098
																				]
																			]
																		},
																		"line-color": "#FCE2B2"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							2.15686
																						],
																						[
																							14.27,
																							3.45098
																						]
																					]
																				},
																				"line-color": "#F5C13C"
																			},
																			"id": "交通/国道/0",
																			"source": "esri",
																			"source-layer": "国道",
																			"type": "line",
																			"minzoom": 9.53
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": {
																					"stops": [
																						[
																							9.53,
																							3.33333
																						],
																						[
																							14.27,
																							5.33333
																						]
																					]
																				},
																				"line-color": "#FBB431"
																			},
																			"id": "交通/国道/1",
																			"source": "esri",
																			"source-layer": "国道",
																			"type": "line",
																			"minzoom": 9.53
																		}
																	],
																	"id": "交通/国道/0",
																	"source": "esri",
																	"source-layer": "国道",
																	"type": "line",
																	"title": "国道",
																	"minzoom": 9.53
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": {
																			"stops": [
																				[
																					9.53,
																					3.33333
																				],
																				[
																					14.27,
																					5.33333
																				]
																			]
																		},
																		"line-color": "#FBB431"
																	},
																	"id": "交通/国道/1",
																	"source": "esri",
																	"source-layer": "国道",
																	"type": "line",
																	"minzoom": 9.53
																}
															],
															"id": "交通/国道/0",
															"source": "esri",
															"source-layer": "国道",
															"type": "line",
															"title": "国道",
															"minzoom": 9.53
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": {
																	"stops": [
																		[
																			9.53,
																			3.33333
																		],
																		[
																			14.27,
																			5.33333
																		]
																	]
																},
																"line-color": "#FBB431"
															},
															"id": "交通/国道/1",
															"source": "esri",
															"source-layer": "国道",
															"type": "line",
															"minzoom": 9.53
														}
													],
													"id": "交通/国道/0",
													"source": "esri",
													"source-layer": "国道",
													"type": "line",
													"title": "国道",
													"minzoom": 9.53
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": {
															"stops": [
																[
																	9.53,
																	3.33333
																],
																[
																	14.27,
																	5.33333
																]
															]
														},
														"line-color": "#FBB431"
													},
													"id": "交通/国道/1",
													"source": "esri",
													"source-layer": "国道",
													"type": "line",
													"minzoom": 9.53
												}
											],
											"id": "交通/国道/0",
											"source": "esri",
											"source-layer": "国道",
											"type": "line",
											"title": "国道",
											"minzoom": 9.53
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															9.53,
															3.33333
														],
														[
															14.27,
															5.33333
														]
													]
												},
												"line-color": "#FBB431"
											},
											"id": "交通/国道/1",
											"source": "esri",
											"source-layer": "国道",
											"type": "line",
											"minzoom": 9.53
										}
									],
									"id": "交通/国道/0",
									"source": "esri",
									"source-layer": "国道",
									"type": "line",
									"title": "国道",
									"minzoom": 9.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													9.53,
													3.33333
												],
												[
													14.27,
													5.33333
												]
											]
										},
										"line-color": "#FBB431"
									},
									"id": "交通/国道/1",
									"source": "esri",
									"source-layer": "国道",
									"type": "line",
									"minzoom": 9.53
								}
							],
							"id": "交通/国道/0",
							"source": "esri",
							"source-layer": "国道",
							"type": "line",
							"title": "国道",
							"minzoom": 9.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											9.53,
											3.33333
										],
										[
											14.27,
											5.33333
										]
									]
								},
								"line-color": "#FBB431"
							},
							"id": "交通/国道/1",
							"source": "esri",
							"source-layer": "国道",
							"type": "line",
							"minzoom": 9.53
						}
					],
					"id": "交通/国道/0",
					"source": "esri",
					"source-layer": "国道",
					"type": "line",
					"title": "国道",
					"minzoom": 9.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									9.53,
									3.33333
								],
								[
									14.27,
									5.33333
								]
							]
						},
						"line-color": "#CCCCCC"
					},
					"id": "交通/国道/1",
					"source": "esri",
					"source-layer": "国道",
					"type": "line",
					"minzoom": 9.53
				}
			],
			"id": "交通/国道/0",
			"source": "esri",
			"source-layer": "国道",
			"type": "line",
			"title": "国道",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 4.53333,
				"line-color": "#F19E05"
			},
			"id": "交通/高速高架/1",
			"source": "esri",
			"source-layer": "高速高架",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.高速高架",
			"maxzoom": 14.27,
			"paint": {
				"line-width": 2.93333,
				"line-color": "#FCE2B2"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.高速高架",
					"maxzoom": 14.27,
					"paint": {
						"line-width": 2.93333,
						"line-color": "#FCE2B2"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.高速高架",
							"maxzoom": 14.27,
							"paint": {
								"line-width": 2.93333,
								"line-color": "#FCE2B2"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 2.93333,
										"line-color": "#FCE2B2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"layerCategory": "交通.高速高架",
											"maxzoom": 14.27,
											"paint": {
												"line-width": 2.93333,
												"line-color": "#FAFAFA"
											},
											"attributes": [{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"layerCategory": "交通.高速高架",
													"maxzoom": 14.27,
													"paint": {
														"line-width": 2.93333,
														"line-color": "#FAFAFA"
													},
													"attributes": [{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"layerCategory": "交通.高速高架",
															"maxzoom": 14.27,
															"paint": {
																"line-width": 2.93333,
																"line-color": "#FAFAFA"
															},
															"attributes": [{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": 2.93333,
																		"line-color": "#FAFAFA"
																	},
																	"attributes": [{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": 2.93333,
																				"line-color": "#FCE2B2"
																			},
																			"attributes": [{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": 2.93333,
																						"line-color": "#F6B338"
																					},
																					"id": "交通/高速高架/0",
																					"source": "esri",
																					"source-layer": "高速高架",
																					"type": "line",
																					"minzoom": 12.27
																				},
																				{
																					"layout": {
																						"line-cap": "round",
																						"line-join": "round"
																					},
																					"maxzoom": 14.27,
																					"paint": {
																						"line-width": 4.53333,
																						"line-color": "#F19E05"
																					},
																					"id": "交通/高速高架/1",
																					"source": "esri",
																					"source-layer": "高速高架",
																					"type": "line",
																					"minzoom": 12.27
																				}
																			],
																			"id": "交通/高速高架/0",
																			"source": "esri",
																			"source-layer": "高速高架",
																			"type": "line",
																			"title": "高速高架",
																			"minzoom": 12.27
																		},
																		{
																			"layout": {
																				"line-cap": "round",
																				"line-join": "round"
																			},
																			"maxzoom": 14.27,
																			"paint": {
																				"line-width": 4.53333,
																				"line-color": "#F19E05"
																			},
																			"id": "交通/高速高架/1",
																			"source": "esri",
																			"source-layer": "高速高架",
																			"type": "line",
																			"minzoom": 12.27
																		}
																	],
																	"id": "交通/高速高架/0",
																	"source": "esri",
																	"source-layer": "高速高架",
																	"type": "line",
																	"title": "高速高架",
																	"minzoom": 12.27
																},
																{
																	"layout": {
																		"line-cap": "round",
																		"line-join": "round"
																	},
																	"maxzoom": 14.27,
																	"paint": {
																		"line-width": 4.53333,
																		"line-color": "#F19E05"
																	},
																	"id": "交通/高速高架/1",
																	"source": "esri",
																	"source-layer": "高速高架",
																	"type": "line",
																	"minzoom": 12.27
																}
															],
															"id": "交通/高速高架/0",
															"source": "esri",
															"source-layer": "高速高架",
															"type": "line",
															"title": "高速高架",
															"minzoom": 12.27
														},
														{
															"layout": {
																"line-cap": "round",
																"line-join": "round"
															},
															"maxzoom": 14.27,
															"paint": {
																"line-width": 4.53333,
																"line-color": "#F19E05"
															},
															"id": "交通/高速高架/1",
															"source": "esri",
															"source-layer": "高速高架",
															"type": "line",
															"minzoom": 12.27
														}
													],
													"id": "交通/高速高架/0",
													"source": "esri",
													"source-layer": "高速高架",
													"type": "line",
													"title": "高速高架",
													"minzoom": 12.27
												},
												{
													"layout": {
														"line-cap": "round",
														"line-join": "round"
													},
													"maxzoom": 14.27,
													"paint": {
														"line-width": 4.53333,
														"line-color": "#F19E05"
													},
													"id": "交通/高速高架/1",
													"source": "esri",
													"source-layer": "高速高架",
													"type": "line",
													"minzoom": 12.27
												}
											],
											"id": "交通/高速高架/0",
											"source": "esri",
											"source-layer": "高速高架",
											"type": "line",
											"title": "高速高架",
											"minzoom": 12.27
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 4.53333,
												"line-color": "#F19E05"
											},
											"id": "交通/高速高架/1",
											"source": "esri",
											"source-layer": "高速高架",
											"type": "line",
											"minzoom": 12.27
										}
									],
									"id": "交通/高速高架/0",
									"source": "esri",
									"source-layer": "高速高架",
									"type": "line",
									"title": "高速高架",
									"minzoom": 12.27
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 4.53333,
										"line-color": "#F19E05"
									},
									"id": "交通/高速高架/1",
									"source": "esri",
									"source-layer": "高速高架",
									"type": "line",
									"minzoom": 12.27
								}
							],
							"id": "交通/高速高架/0",
							"source": "esri",
							"source-layer": "高速高架",
							"type": "line",
							"title": "高速高架",
							"minzoom": 12.27
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 4.53333,
								"line-color": "#F19E05"
							},
							"id": "交通/高速高架/1",
							"source": "esri",
							"source-layer": "高速高架",
							"type": "line",
							"minzoom": 12.27
						}
					],
					"id": "交通/高速高架/0",
					"source": "esri",
					"source-layer": "高速高架",
					"type": "line",
					"title": "高速高架",
					"minzoom": 12.27
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 4.53333,
						"line-color": "#F19E05"
					},
					"id": "交通/高速高架/1",
					"source": "esri",
					"source-layer": "高速高架",
					"type": "line",
					"minzoom": 12.27
				}
			],
			"id": "交通/高速高架/0",
			"source": "esri",
			"source-layer": "高速高架",
			"type": "line",
			"title": "高速高架",
			"minzoom": 12.27
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							7.21,
							3.73333
						],
						[
							14.27,
							8
						]
					]
				},
				"line-color": "#FAD693"
			},
			"id": "交通/高速公路/1",
			"source": "esri",
			"source-layer": "高速公路",
			"type": "line",
			"minzoom": 7.21
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.高速公路",
			"maxzoom": 14.27,
			"paint": {
				"line-width": {
					"stops": [
						[
							7.21,
							2.41569
						],
						[
							14.27,
							5.17647
						]
					]
				},
				"line-color": "#FCE2B2"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.高速公路",
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									7.21,
									2.41569
								],
								[
									14.27,
									5.17647
								]
							]
						},
						"line-color": "#FCE2B2"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.高速公路",
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											7.21,
											2.41569
										],
										[
											14.27,
											5.17647
										]
									]
								},
								"line-color": "#FCE2B2"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													7.21,
													2.41569
												],
												[
													14.27,
													5.17647
												]
											]
										},
										"line-color": "#FCE2B2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															7.21,
															2.41569
														],
														[
															14.27,
															5.17647
														]
													]
												},
												"line-color": "#F6B338"
											},
											"id": "交通/高速公路/0",
											"source": "esri",
											"source-layer": "高速公路",
											"type": "line",
											"minzoom": 7.21
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": {
													"stops": [
														[
															7.21,
															3.73333
														],
														[
															14.27,
															8
														]
													]
												},
												"line-color": "#F19E05"
											},
											"id": "交通/高速公路/1",
											"source": "esri",
											"source-layer": "高速公路",
											"type": "line",
											"minzoom": 7.21
										}
									],
									"id": "交通/高速公路/0",
									"source": "esri",
									"source-layer": "高速公路",
									"type": "line",
									"title": "高速公路",
									"minzoom": 7.21
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": {
											"stops": [
												[
													7.21,
													3.73333
												],
												[
													14.27,
													8
												]
											]
										},
										"line-color": "#FAD693"
									},
									"id": "交通/高速公路/1",
									"source": "esri",
									"source-layer": "高速公路",
									"type": "line",
									"minzoom": 7.21
								}
							],
							"id": "交通/高速公路/0",
							"source": "esri",
							"source-layer": "高速公路",
							"type": "line",
							"title": "高速公路",
							"minzoom": 7.21
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": {
									"stops": [
										[
											7.21,
											3.73333
										],
										[
											14.27,
											8
										]
									]
								},
								"line-color": "#FAD693"
							},
							"id": "交通/高速公路/1",
							"source": "esri",
							"source-layer": "高速公路",
							"type": "line",
							"minzoom": 7.21
						}
					],
					"id": "交通/高速公路/0",
					"source": "esri",
					"source-layer": "高速公路",
					"type": "line",
					"title": "高速公路",
					"minzoom": 7.21
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": {
							"stops": [
								[
									7.21,
									3.73333
								],
								[
									14.27,
									8
								]
							]
						},
						"line-color": "#FAD693"
					},
					"id": "交通/高速公路/1",
					"source": "esri",
					"source-layer": "高速公路",
					"type": "line",
					"minzoom": 7.21
				}
			],
			"id": "交通/高速公路/0",
			"source": "esri",
			"source-layer": "高速公路",
			"type": "line",
			"title": "高速公路",
			"minzoom": 7.21
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 4,
				"line-color": "#FBC256"
			},
			"id": "交通/桥梁中心线/1",
			"source": "esri",
			"source-layer": "桥梁中心线",
			"type": "line",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.桥梁",
			"maxzoom": 14.27,
			"paint": {
				"line-width": 2.4,
				"line-color": "#FDEED2"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.桥梁",
					"maxzoom": 14.27,
					"paint": {
						"line-width": 2.4,
						"line-color": "#FDEED2"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.桥梁",
							"maxzoom": 14.27,
							"paint": {
								"line-width": 2.4,
								"line-color": "#FDEED2"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 2.4,
										"line-color": "#FDEED2"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 2.4,
												"line-color": "#FDEED2"
											},
											"id": "交通/桥梁中心线/0",
											"source": "esri",
											"source-layer": "桥梁中心线",
											"type": "line",
											"minzoom": 11.53
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 4,
												"line-color": "#FBC256"
											},
											"id": "交通/桥梁中心线/1",
											"source": "esri",
											"source-layer": "桥梁中心线",
											"type": "line",
											"minzoom": 11.53
										}
									],
									"id": "交通/桥梁中心线/0",
									"source": "esri",
									"source-layer": "桥梁中心线",
									"type": "line",
									"title": "桥梁",
									"minzoom": 11.53
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 4,
										"line-color": "#FBC256"
									},
									"id": "交通/桥梁中心线/1",
									"source": "esri",
									"source-layer": "桥梁中心线",
									"type": "line",
									"minzoom": 11.53
								}
							],
							"id": "交通/桥梁中心线/0",
							"source": "esri",
							"source-layer": "桥梁中心线",
							"type": "line",
							"title": "桥梁",
							"minzoom": 11.53
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 4,
								"line-color": "#FBC256"
							},
							"id": "交通/桥梁中心线/1",
							"source": "esri",
							"source-layer": "桥梁中心线",
							"type": "line",
							"minzoom": 11.53
						}
					],
					"id": "交通/桥梁中心线/0",
					"source": "esri",
					"source-layer": "桥梁中心线",
					"type": "line",
					"title": "桥梁",
					"minzoom": 11.53
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 4,
						"line-color": "#FBC256"
					},
					"id": "交通/桥梁中心线/1",
					"source": "esri",
					"source-layer": "桥梁中心线",
					"type": "line",
					"minzoom": 11.53
				}
			],
			"id": "交通/桥梁中心线/0",
			"source": "esri",
			"source-layer": "桥梁中心线",
			"type": "line",
			"title": "桥梁",
			"minzoom": 11.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"maxzoom": 14.27,
			"paint": {
				"line-width": 3.73333,
				"line-color": "#F8C15B"
			},
			"id": "交通/汽渡/1",
			"source": "esri",
			"source-layer": "汽渡",
			"type": "line",
			"minzoom": 10
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.汽渡",
			"maxzoom": 14.27,
			"paint": {
				"line-width": 2.13333,
				"line-color": "#ECDBBA"
			},
			"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.汽渡",
					"maxzoom": 14.27,
					"paint": {
						"line-width": 2.13333,
						"line-color": "#ECDBBA"
					},
					"attributes": [{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"layerCategory": "交通.汽渡",
							"maxzoom": 14.27,
							"paint": {
								"line-width": 2.13333,
								"line-color": "#ECDBBA"
							},
							"attributes": [{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 2.13333,
										"line-color": "#ECDBBA"
									},
									"attributes": [{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 2.13333,
												"line-color": "#ECDBBA"
											},
											"id": "交通/汽渡/0",
											"source": "esri",
											"source-layer": "汽渡",
											"type": "line",
											"minzoom": 10
										},
										{
											"layout": {
												"line-cap": "round",
												"line-join": "round"
											},
											"maxzoom": 14.27,
											"paint": {
												"line-width": 3.73333,
												"line-color": "#F8C15B"
											},
											"id": "交通/汽渡/1",
											"source": "esri",
											"source-layer": "汽渡",
											"type": "line",
											"minzoom": 10
										}
									],
									"id": "交通/汽渡/0",
									"source": "esri",
									"source-layer": "汽渡",
									"type": "line",
									"title": "汽渡",
									"minzoom": 10
								},
								{
									"layout": {
										"line-cap": "round",
										"line-join": "round"
									},
									"maxzoom": 14.27,
									"paint": {
										"line-width": 3.73333,
										"line-color": "#F8C15B"
									},
									"id": "交通/汽渡/1",
									"source": "esri",
									"source-layer": "汽渡",
									"type": "line",
									"minzoom": 10
								}
							],
							"id": "交通/汽渡/0",
							"source": "esri",
							"source-layer": "汽渡",
							"type": "line",
							"title": "汽渡",
							"minzoom": 10
						},
						{
							"layout": {
								"line-cap": "round",
								"line-join": "round"
							},
							"maxzoom": 14.27,
							"paint": {
								"line-width": 3.73333,
								"line-color": "#F8C15B"
							},
							"id": "交通/汽渡/1",
							"source": "esri",
							"source-layer": "汽渡",
							"type": "line",
							"minzoom": 10
						}
					],
					"id": "交通/汽渡/0",
					"source": "esri",
					"source-layer": "汽渡",
					"type": "line",
					"title": "汽渡",
					"minzoom": 10
				},
				{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"maxzoom": 14.27,
					"paint": {
						"line-width": 3.73333,
						"line-color": "#F8C15B"
					},
					"id": "交通/汽渡/1",
					"source": "esri",
					"source-layer": "汽渡",
					"type": "line",
					"minzoom": 10
				}
			],
			"id": "交通/汽渡/0",
			"source": "esri",
			"source-layer": "汽渡",
			"type": "line",
			"title": "汽渡",
			"minzoom": 10
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.隧道",
			"maxzoom": 14.27,
			"paint": {
				"line-width": 2.4,
				"line-dasharray": [
					3.33333,
					2.22222
				],
				"line-color": "#FCE2B2"
			},
			"attributes": [{
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.隧道",
				"maxzoom": 14.27,
				"paint": {
					"line-width": 2.4,
					"line-dasharray": [
						3.33333,
						2.22222
					],
					"line-color": "#FCE2B2"
				},
				"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.隧道",
					"maxzoom": 14.27,
					"paint": {
						"line-width": 2.4,
						"line-dasharray": [
							3.33333,
							2.22222
						],
						"line-color": "#FCE2B2"
					},
					"attributes": [{
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"maxzoom": 14.27,
						"paint": {
							"line-width": 2.4,
							"line-dasharray": [
								3.33333,
								2.22222
							],
							"line-color": "#FCE2B2"
						},
						"id": "交通/隧道/0",
						"source": "esri",
						"source-layer": "隧道",
						"type": "line",
						"minzoom": 9.53
					}],
					"id": "交通/隧道/0",
					"source": "esri",
					"source-layer": "隧道",
					"type": "line",
					"minzoom": 9.53
				}],
				"id": "交通/隧道/0",
				"source": "esri",
				"source-layer": "隧道",
				"type": "line",
				"minzoom": 9.53
			}],
			"id": "交通/隧道/0",
			"source": "esri",
			"source-layer": "隧道",
			"type": "line",
			"minzoom": 9.53
		},
		{
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.有轨电车",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#A8B0FB"
			},
			"attributes": [{
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.有轨电车",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#A8B0FB"
				},
				"attributes": [{
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.有轨电车",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#A8B0FB"
					},
					"attributes": [{
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#A8B0FB"
						},
						"id": "交通/有轨电车",
						"source": "esri",
						"source-layer": "有轨电车",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/有轨电车",
					"source": "esri",
					"source-layer": "有轨电车",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/有轨电车",
				"source": "esri",
				"source-layer": "有轨电车",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/有轨电车",
			"source": "esri",
			"source-layer": "有轨电车",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				1
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁S1号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#3A8C8C"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					1
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁S1号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#3A8C8C"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						1
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁S1号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#3A8C8C"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							1
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#3A8C8C"
						},
						"id": "交通/JT_GDJT_L/地铁S1号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁S1号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁S1号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁S1号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				2
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁S3号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#CE71A9"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					2
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁S3号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#CE71A9"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						2
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁S3号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#CE71A9"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							2
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#CE71A9"
						},
						"id": "交通/JT_GDJT_L/地铁S3号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁S3号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁S3号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁S3号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				3
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁S7号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#D8778E"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					3
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁S7号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#D8778E"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						3
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁S7号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#D8778E"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							3
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#D8778E"
						},
						"id": "交通/JT_GDJT_L/地铁S7号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁S7号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁S7号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁S7号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				4
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁S8号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#DE6B1F"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					4
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁S8号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#DE6B1F"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						4
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁S8号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#DE6B1F"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							4
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#DE6B1F"
						},
						"id": "交通/JT_GDJT_L/地铁S8号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁S8号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁S8号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁S8号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				5
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁S9号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#EFC748"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					5
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁S9号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#EFC748"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						5
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁S9号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#EFC748"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							5
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#EFC748"
						},
						"id": "交通/JT_GDJT_L/地铁S9号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁S9号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁S9号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁S9号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				6
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁一号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#6CB6DC"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					6
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁一号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#6CB6DC"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						6
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁一号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#6CB6DC"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							6
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#6CB6DC"
						},
						"id": "交通/JT_GDJT_L/地铁一号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁一号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁一号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁一号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				7
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁三号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#5B9E57"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					7
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁三号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#5B9E57"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						7
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁三号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#5B9E57"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							7
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#5B9E57"
						},
						"id": "交通/JT_GDJT_L/地铁三号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁三号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁三号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁三号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				8
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁二号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#CE4A52"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					8
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁二号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#CE4A52"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						8
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁二号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#CE4A52"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							8
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#CE4A52"
						},
						"id": "交通/JT_GDJT_L/地铁二号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁二号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁二号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁二号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				9
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁十号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#B19066"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					9
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁十号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#B19066"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						9
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁十号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#B19066"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							9
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#B19066"
						},
						"id": "交通/JT_GDJT_L/地铁十号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁十号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁十号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁十号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				10
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "交通.地铁.地铁四号线",
			"paint": {
				"line-width": 2.66667,
				"line-color": "#845AA3"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					10
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "交通.地铁.地铁四号线",
				"paint": {
					"line-width": 2.66667,
					"line-color": "#845AA3"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						10
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "交通.地铁.地铁四号线",
					"paint": {
						"line-width": 2.66667,
						"line-color": "#845AA3"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							10
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 2.66667,
							"line-color": "#845AA3"
						},
						"id": "交通/JT_GDJT_L/地铁四号线",
						"source": "esri",
						"source-layer": "JT_GDJT_L",
						"type": "line",
						"minzoom": 12.27
					}],
					"id": "交通/JT_GDJT_L/地铁四号线",
					"source": "esri",
					"source-layer": "JT_GDJT_L",
					"type": "line",
					"minzoom": 12.27
				}],
				"id": "交通/JT_GDJT_L/地铁四号线",
				"source": "esri",
				"source-layer": "JT_GDJT_L",
				"type": "line",
				"minzoom": 12.27
			}],
			"id": "交通/JT_GDJT_L/地铁四号线",
			"source": "esri",
			"source-layer": "JT_GDJT_L",
			"type": "line",
			"minzoom": 12.27
		},
		{
			"filter": [
				"==",
				"_symbol",
				0
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "境界线.省界",
			"paint": {
				"line-width": 0.4,
				"line-dasharray": [
					16.6667,
					6.66667
				],
				"line-color": "#686868"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					0
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "境界线.省界",
				"paint": {
					"line-width": 0.4,
					"line-dasharray": [
						16.6667,
						6.66667
					],
					"line-color": "#686868"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						0
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "境界线.省界",
					"paint": {
						"line-width": 0.4,
						"line-dasharray": [
							16.6667,
							6.66667
						],
						"line-color": "#686868"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							0
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 0.4,
							"line-dasharray": [
								16.6667,
								6.66667
							],
							"line-color": "#686868"
						},
						"id": "境界/XZ_JINGJIE_L/1160101000",
						"source": "esri",
						"source-layer": "XZ_JINGJIE_L",
						"type": "line",
						"minzoom": 7.21
					}],
					"id": "境界/XZ_JINGJIE_L/1160101000",
					"source": "esri",
					"source-layer": "XZ_JINGJIE_L",
					"type": "line",
					"minzoom": 7.21
				}],
				"id": "境界/XZ_JINGJIE_L/1160101000",
				"source": "esri",
				"source-layer": "XZ_JINGJIE_L",
				"type": "line",
				"minzoom": 7.21
			}],
			"id": "境界/XZ_JINGJIE_L/1160101000",
			"source": "esri",
			"source-layer": "XZ_JINGJIE_L",
			"type": "line",
			"minzoom": 7.21
		},
		{
			"filter": [
				"==",
				"_symbol",
				1
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "境界线.市界",
			"paint": {
				"line-width": 0.4,
				"line-dasharray": [
					16.6667,
					6.66667
				],
				"line-color": "#686868"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					1
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "境界线.市界",
				"paint": {
					"line-width": 0.4,
					"line-dasharray": [
						16.6667,
						6.66667
					],
					"line-color": "#686868"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						1
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "境界线.市界",
					"paint": {
						"line-width": 0.4,
						"line-dasharray": [
							16.6667,
							6.66667
						],
						"line-color": "#686868"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							1
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 0.4,
							"line-dasharray": [
								16.6667,
								6.66667
							],
							"line-color": "#686868"
						},
						"id": "境界/XZ_JINGJIE_L/1160102000",
						"source": "esri",
						"source-layer": "XZ_JINGJIE_L",
						"type": "line",
						"minzoom": 7.21
					}],
					"id": "境界/XZ_JINGJIE_L/1160102000",
					"source": "esri",
					"source-layer": "XZ_JINGJIE_L",
					"type": "line",
					"minzoom": 7.21
				}],
				"id": "境界/XZ_JINGJIE_L/1160102000",
				"source": "esri",
				"source-layer": "XZ_JINGJIE_L",
				"type": "line",
				"minzoom": 7.21
			}],
			"id": "境界/XZ_JINGJIE_L/1160102000",
			"source": "esri",
			"source-layer": "XZ_JINGJIE_L",
			"type": "line",
			"minzoom": 7.21
		},
		{
			"filter": [
				"==",
				"_symbol",
				2
			],
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"layerCategory": "境界线.区界",
			"paint": {
				"line-width": 0.4,
				"line-dasharray": [
					16.6667,
					6.66667
				],
				"line-color": "#686868"
			},
			"attributes": [{
				"filter": [
					"==",
					"_symbol",
					2
				],
				"layout": {
					"line-cap": "round",
					"line-join": "round"
				},
				"layerCategory": "境界线.区界",
				"paint": {
					"line-width": 0.4,
					"line-dasharray": [
						16.6667,
						6.66667
					],
					"line-color": "#686868"
				},
				"attributes": [{
					"filter": [
						"==",
						"_symbol",
						2
					],
					"layout": {
						"line-cap": "round",
						"line-join": "round"
					},
					"layerCategory": "境界线.区界",
					"paint": {
						"line-width": 0.4,
						"line-dasharray": [
							16.6667,
							6.66667
						],
						"line-color": "#686868"
					},
					"attributes": [{
						"filter": [
							"==",
							"_symbol",
							2
						],
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-width": 0.4,
							"line-dasharray": [
								16.6667,
								6.66667
							],
							"line-color": "#686868"
						},
						"id": "境界/XZ_JINGJIE_L/1160103000",
						"source": "esri",
						"source-layer": "XZ_JINGJIE_L",
						"type": "line",
						"minzoom": 7.21
					}],
					"id": "境界/XZ_JINGJIE_L/1160103000",
					"source": "esri",
					"source-layer": "XZ_JINGJIE_L",
					"type": "line",
					"minzoom": 7.21
				}],
				"id": "境界/XZ_JINGJIE_L/1160103000",
				"source": "esri",
				"source-layer": "XZ_JINGJIE_L",
				"type": "line",
				"minzoom": 7.21
			}],
			"id": "境界/XZ_JINGJIE_L/1160103000",
			"source": "esri",
			"source-layer": "XZ_JINGJIE_L",
			"type": "line",
			"minzoom": 7.21
		}
	],
	"glyphs": mapconfig.Vector_url + "//resources/fonts/{fontstack}/{range}.pbf",
	"version": 8
}
