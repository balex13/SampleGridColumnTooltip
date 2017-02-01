<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\SampleGridColumnTooltip\Ui\Component\Listing\Column;

use Magento\Ui\Component\Listing\Columns\Column;

class ProductQty extends Column
{
    /**
     * @param array $dataSource
     * @return array
     */
    public function prepareDataSource(array $dataSource)
    {
        return $dataSource;
    }
}
