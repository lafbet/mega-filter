<?php

namespace Lafbet\MegaFilter;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class MegaFilterColumns extends Filter
{

    /**
     * The filter's component.
     *
     * @param Request $request
     * @param $query
     * @param $value
     */
    public function apply(Request $request, $query, $value)
    {

    }

    public function options(Request $request)
    {
    }

}
