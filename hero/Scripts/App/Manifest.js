/*
    Copyright 2026 David Healey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with This file. If not, see <http://www.gnu.org/licenses/>.
*/

const Manifest = {
	samplers: [
		{
			id: "sampler0",
			properties: {}
		}
	],
	patches: [
		{
			id: "Patch 1",
			gain: 0,
			firstKs: 24,
			keyranges: [
				{loKey: 24, hiKey: 29, colour: "keyswitch"},
				{loKey: 36, hiKey: 96, colour: "playable"},
			],
			scripts: [
				{
					id: "noteRangeFilter",
					properties: {LowNote: 36, HighNote: 96}
				}
			]
		}
	]
};
