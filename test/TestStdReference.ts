import {expect} from "chai";
import {waffle, ethers} from "hardhat";
import {TestStdReference__factory} from "../typechain-types";
import {smock} from "@defi-wonderland/smock";
import {BigNumber} from "ethers";

describe("mock", function () {
    it.only("test", async function () {
        // const [admin] = waffle.provider.getWallets()  // enable this line will break test
        const testStdReferenceFactory = await smock.mock<TestStdReference__factory>("TestStdReference")
        const testStdReference = await testStdReferenceFactory.deploy()

        testStdReference.getReferenceData.returns(() => {
            return [BigNumber.from(400), 1234, 1234]
        })
        const referenceData = await testStdReference.getReferenceData('', '');
        expect(referenceData[0]).to.equal(BigNumber.from("400"))
    });
});
