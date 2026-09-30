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

namespace App
{
	VelocityTable.create("pnlCard0", "velocityScaler", {});
	EnvelopePanel.create("pnlCard1", "ahdsrController", "globalGainFlexAhdsr", {});
	ArticulationList.create("pnlCard2", {});
	MixerPanel.create("pnlCard4", 3, "mixer", {});
	
	//! knbExpression
	const knbExpression = Content.getComponent("knbExpression");
	knbExpression.setLocalLookAndFeel(CoreLookAndFeel.knob);
	
	//! knbVibratoRate
	const knbVibratoRate = Content.getComponent("knbVibratoRate");
	knbVibratoRate.setLocalLookAndFeel(CoreLookAndFeel.knob);
	
	//! knbVibratoAmount
	const knbVibratoAmount = Content.getComponent("knbVibratoAmount");
	knbVibratoAmount.setLocalLookAndFeel(CoreLookAndFeel.knob);
}
